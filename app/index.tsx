import React, { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import {
  initializeSdk,
  showTrophyCase,
  updateActivity,
} from "gowavey-react-native-sdk";

export default function App() {
  const [isSdkInitialized, setIsSdkInitialized] = useState(false);
  const [value, setValue] = useState("");

  const initSdk = useCallback(async () => {
    try {
      await initializeSdk("eS8wmBobAEbN63jvDWZQyY", "Andrej_Noubis_2025");
      setIsSdkInitialized(true);
    } catch (error) {
      console.error("SDK initialization failed", error);
    }
  }, []);

  const showTrophy = useCallback(async () => {
    try {
      await showTrophyCase("hELDrquYXu49W1wcHL8dGe");
    } catch (error) {
      console.error("Show trophy case failed", error);
    }
  }, []);

  const handleUpdateActivity = useCallback(async () => {
    try {
      if (value) {
        await updateActivity("v8H78W2EmEvxeFpKnYK4dx", parseFloat(value), true);
      }
    } catch (error) {
      console.error("Update activity failed", error);
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.button} onPress={initSdk}>
        <Text>Initialize SDK</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, !isSdkInitialized && styles.disabledButton]}
        onPress={showTrophy}
        disabled={!isSdkInitialized}
      >
        <Text>Show Trophy</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Enter Activity Value"
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={[styles.button, !isSdkInitialized && styles.disabledButton]}
        onPress={handleUpdateActivity}
        disabled={!isSdkInitialized}
      >
        <Text>Update Activity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: "#eee",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
});
