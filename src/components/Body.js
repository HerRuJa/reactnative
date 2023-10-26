import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Body(props) {
    const {total,capital,interes,months, errorMessage} = props
  return (
    <View style={styles.body}>
        {total &&   <>
                        <View>
                            <Text style={styles.title}>Resumen</Text>
                            <Data title={"Cantidad solicitada"} value={capital}/>
                            <Data title={"Interes ingresado"} value={interes}/>
                            <Data title={"Plazos"} value={months}/>
                            <Data title={"Pago mensual"} value={total.monthlyFee}/>
                            <Data title={"Total"} value={total.totalPayable}/>
                            

                        </View>
                    </>} 
        <View>
            <Text style={styles.error}>{errorMessage}</Text>
        </View>
    </View>
  )
} 


 function Data({title, value}) {
  return (
    <View style={styles.data}>
        <Text>{title} </Text>    
        <Text>{value} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    data:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
    } ,
    title:{
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:30,
    },
    body:{
        marginTop:100,
        marginHorizontal:40,
    },
    error:{
        textAlign:'center',
        color:'#f00',
        fontWeight:'bold',
        fontSize:20,
        position:'absolute',
        marginTop:100,
        
    }
})