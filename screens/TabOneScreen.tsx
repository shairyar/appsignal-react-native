// Appsignal configuration
const Appsignal = require("@appsignal/javascript").default
const appsignal = new Appsignal({ key: "YOUR FRONTEND API KEY" })
// End of Appsignal configuration

import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  // Catching an exception so it lands in AppSIgnal
  window.onerror = function (msg, url, lineNo, columnNo, error) {
    const param = JSON.parse(error.message).foo
    const span = appsignal.createSpan()
  
    span.setTags({ tag: param }).setError(error)
    appsignal.send(span)
    return false
  }

  // Raising an exception
  throw new Error(
    JSON.stringify({ message: 'Some new exception message', foo: 'bar' })
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
