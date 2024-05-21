import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Safety App</Text>
      <View style={styles.button}>
        <Button
          title="Dicas de Segurança"
          onPress={() => navigation.navigate('Tips')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Emergência"
          onPress={() => navigation.navigate('Emergency')}
          color="#FF6347" // Red color for emergency button
        />
      </View>
    </View>
  );
};

const TipsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dicas de Segurança</Text>
      <Text style={styles.text}>- Sempre utilize equipamentos de proteção adequados.</Text>
      <Text style={styles.text}>- Siga os procedimentos de segurança indicados.</Text>
      <Text style={styles.text}>- Informe imediatamente qualquer condição insegura.</Text>
    </View>
  );
};

const EmergencyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergência</Text>
      <Text style={[styles.text, styles.emergencyText]}>
        Em caso de emergência, entre em contato com a equipe de segurança ou
        ligue para o número de emergência.
      </Text>
      <View style={styles.button}>
        <Button
          title="Ligar para Emergência"
          onPress={() => console.log('Ligando para emergência...')}
          color="#FF6347" // Red color for emergency button
        />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db', // Header background color
          },
          headerTintColor: '#fff', // Header text color
          headerTitleStyle: {
            fontWeight: 'bold', // Header text style
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Safety App' }}
        />
        <Stack.Screen
          name="Tips"
          component={TipsScreen}
          options={{ title: 'Dicas de Segurança' }}
        />
        <Stack.Screen
          name="Emergency"
          component={EmergencyScreen}
          options={{ title: 'Emergência' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff', // Background color for screens
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333', // Text color for titles
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#555', // Text color for regular text
  },
  emergencyText: {
    color: '#FF6347', // Text color for emergency text
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
});

export default App;
