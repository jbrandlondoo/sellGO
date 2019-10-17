import React from 'react'
import { View,StyleSheet,Image,Text,TouchableOpacity } from 'react-native'

class CardView extends React.Component{
    componentDidMount(){}
    componentDidUpdate(){}
    componentWillUnmount(){}
    render(){
        return (
          <View style={{ alignItems: 'center', }}>
          <View style={styles.root}>
          <View style={styles.rows}>
          <View style={styles.viewImg}>
          <View style={styles.rowImg}>
          <Image style={styles.image} source={{uri:"https://i.pinimg.com/originals/ec/9c/6d/ec9c6dca565acd83408fbbfebd763ca7.jpg"}}/>
          </View>
          </View>
          <View style={styles.rowText}>

          <View >
            <Text style={{fontWeight: 'bold',fontSize:18}}>Donaas</Text>
          </View>

          <View>
            <Text style={{fontWeight: 'bold'}}>20000 $ C/U</Text>
          </View>

          <View style={styles.viewUser}>
            <Text>juan j brand</Text>
            <TouchableOpacity >
            <Image style={styles.imageOptions} source={require('./../../img/icons8-whatsapp-30.png')}/>
            </TouchableOpacity >
            <TouchableOpacity >
            <Image style={styles.imageOptions} source={require('./../../img/icons8-marcador-30.png')}/>
            </TouchableOpacity >

          </View>
          </View>
          </View>
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
    height:120,
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
      borderRadius:60,
      backgroundColor: '#E1E1DD',
        height:110,
        width:110,
        padding:5,
      },
  image:{
  borderRadius:50,
    height:100,
    width:100,
    resizeMode:'contain'
  },
  rows:{
       flex: 1,
      flexDirection: 'row',
  },
  imageOptions:{
    marginLeft:15,
    height:25,
    width:25,
    resizeMode:'contain'
  },
  viewUser:{
     flex: 1,
     marginTop:5,
      flexDirection: 'row',},
  rowText:{
      padding:10,
      flex: 3,
      height:'100%',
    },
  })

export default CardView