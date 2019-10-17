import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import CardView from './../../components/Card/Card'


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
      <ScrollView style={{width:'100%'}}>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        <CardView/>
        </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
