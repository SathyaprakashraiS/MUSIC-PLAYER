import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './app/navigation/appnavigation';
import { NavigationContainer } from '@react-navigation/native';
import AudioFiles from './app/content/audiofiles';
import Songitem from './app/components/songitem';
import { SafeAreaView } from 'react-native-web';

export default function App() {

  return (
    <AudioFiles>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AudioFiles>
    /*
    <View style={styles.container}>
      <Text>SATHYA PRAKASH RAI S</Text>
      <StatusBar style="auto" />
    </View>
    */
  );
  /*
    return (
      <View style={styles.holder}>
        <Songitem />
  
      </View>
    );
    */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  holder: {
    flex: 1,
    backgroundColor: '#fff',
    //marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
