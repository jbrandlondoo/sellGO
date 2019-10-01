import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './../..../../components/Card/Card'


export default class Home extends React.Component {
    static navigationOptions = {
        title: 'SellGO',
        headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#FEDC1F',
      };
render(){
  return (
    <View style={styles.container}>
        <Card/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
