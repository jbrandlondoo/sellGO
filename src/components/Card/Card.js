import React from 'react'
import { View } from 'react-native'
import Card from '@material-ui/core/Card';

class Card extends React.Component{
    componentDidMount(){}
    componentDidUpdate(){}
    componentWillUnmount(){}
    render(){
        return (
        <View style={styles.root}>
            <View style={styles.viewImg}>
            <Image style={styles.image} source={{uri:"https://i.pinimg.com/originals/ec/9c/6d/ec9c6dca565acd83408fbbfebd763ca7.jpg"}}/>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({

    root:{
      padding:5,
      marginTop:5,
      borderRadius:10,
      height:250,
      width:"95%",
          backgroundColor: '#FFF',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    viewImg:{
        borderRadius:50,
        backgroundColor: '#000',
          height:100,
          width:100,
        },
        image:{
        borderRadius:50,
          height:100,
          width:100,
          resizeMode:'contain'
        },
  })

export default Card 