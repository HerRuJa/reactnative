import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../util/colors'
import { Picker } from '@react-native-picker/picker';

export default function form(props) {
  const {setCapital,setInteres,setMonths} = props

  const [selectedMonths, setSelectedMonths] = useState();
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
        <TextInput
          onChange={e => setCapital(e.nativeEvent.text)}
          placeholder="cantidad"
          keyboardType='numeric'
          style={styles.input}></TextInput>
        <TextInput
          onChange={e => setInteres(e.nativeEvent.text)}
          placeholderTextColor='red'
          placeholder="Interes %"
          keyboardType='numeric'
          style={[styles.input, styles.inputPercentage]}></TextInput>
      
      </View>

      <View>
          <View><Text>Seleccione el mes</Text></View>
          <Picker 
            style={stylesPicker.inputAndroid}
            selectedValue={selectedMonths}
            
            onValueChange={(itemValue, itemIndex) =>{
              setSelectedMonths(itemValue)
              setMonths(itemValue)
            }
            }>
            <Picker.Item label="3 meses" value={3} />
            <Picker.Item label="6 meses" value={6} />
            <Picker.Item label="12 meses" value={12} />
            <Picker.Item label="16 meses" value={16} />
            <Picker.Item label="24 meses" value={24} />
            <Picker.Item label="30 meses" value={30} />
          </Picker>

          <View>
            <Text>Opcion elegida:{selectedMonths}</Text>
          </View>
        </View>


    </View>
  )
}

function form2() {
  return (
    <View>
      <TextInput
        placeholder="Cantidad a pedir"
        keyboardType='numeric'></TextInput>



    </View>
  )
}



const styles = StyleSheet.create({
  viewForm: {
    backgroundColor:colors.PRIMARY_COLOR_DARK,
    height:190,
    width:'85%',
    paddingHorizontal:50,
    paddingTop:10,
    borderRadius:30,
    justifyContent:'center',
    position:'absolute',
    bottom:-100,
    flexDirection: 'column',

  },
  viewInput: {
    flexDirection: 'row',

  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 5,
    borderColor: colors.PRIMARY_COLOR,
    width: '60%',
    color: '#000',
    marginRight: 5,
    marginBottom: 10,
    paddingHorizontal: 20,

  },
  inputPercentage: {
    width: '40%'

  }
})


const stylesPicker = StyleSheet.create({
  inputAndroid:{
    fontSize:16,
    paddingHorizontal:10,
    paddingVertical:8,
    borderWidth:2,
    borderColor:'grey',
    borderRadius:8,
    color:'black',
    paddingRight:30,
    backgroundColor:'white',
  }
})