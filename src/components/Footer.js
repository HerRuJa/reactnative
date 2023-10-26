import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Touchable } from 'react-native'
import colors from '../util/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Footer(props) {
    const {enviar}=props
  return (
    <View style={styles.viewFooter}>
        <TouchableOpacity style={styles.touch} onPress={enviar}>
        <Text style={styles.textTouch}>Calcular</Text>
        </TouchableOpacity>
        
      </View>
  )
}

const styles = StyleSheet.create({
    viewFooter:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:100,
        backgroundColor:colors.PRIMARY_COLOR,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        justifyContent:'center',
        alignItems:'center',
    },
    touch:{
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding:15,
        borderRadius:20,
        width:'50%'

    },
    textTouch:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',

    },
})
