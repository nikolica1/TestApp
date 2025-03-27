import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [text, setText] = useState('');

  const handlePress = () => {
    alert(`Uneto: ${text}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button title="Send" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: 20,
  },
  input: {
    height: 40,
    width: 100,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
