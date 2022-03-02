// Appsignal configuration
const Appsignal = require("@appsignal/javascript").default
const appsignal = new Appsignal({ key: "8197fa3d-b285-4069-8e02-2acab3082947", revision: "12345xyz" })

import { plugin } from "@appsignal/plugin-window-events"
appsignal.use(plugin())
// End of Appsignal configuration

import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';




export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  // Raising an exception
  throw new Error(
    JSON.stringify({ message: '5 Exception message sent via plugin', foo: 'bar' })
  )
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
