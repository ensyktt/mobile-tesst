import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  const [authenticated, setAuthenticated] = React.useState(false);

  const handleLogin = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate with Face ID',
      fallbackLabel: 'Enter passcode',
      disableDeviceFallback: false,
    });

    if (result.success) {
      setAuthenticated(true);
    }
  };

  const handleCall = () => {
    Linking.openURL('tel:112');
  };

  return (
    <View style={styles.container}>
      {!authenticated ? (
        <Button title="Login with Face ID" onPress={handleLogin} />
      ) : (
        <>
          <Text style={styles.text}>Authenticated!</Text>
          <Button title="Call Emergency" onPress={handleCall} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 20,
    fontSize: 18,
  },
});
