import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from './src/util/colors';
import Form from './src/components/Form';
import { useState } from 'react';
import Footer from './src/components/Footer';
export default function App() {
  const [capital,setCapital] = useState(null)
  const [interes,setInteres] = useState(null)
  const [months,setMonths] = useState(null)

  const enviar = () =>{
    if (!capital) {
      console.log('Favor de ingresar un capital')
    } else if (!interes) { 
        console.log('Favor de ingresar un interes')
      } else  if (!months) {
          console.log('Favor de ingresar los meses')
        }else{
          console.log('todo bien...')
        }
      }
      

  return (
   // <View style={ {flex:1, backgroundColor:"blue"}}> 
   <View style={styles.container}>
      
      <StatusBar style="auto" />

      <View style={ styles.head}>
        <Text style={ styles.titleApp}>Sistema de...</Text>

        <Form setCapital={setCapital}
              setInteres={setInteres}
              setMonths={setMonths}/>
      
      </View>

      <View style={ styles.body}>
        <Text>body</Text>
      </View>
      
      <Footer enviar={enviar}/>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  head: {
    
    backgroundColor: colors.PRIMARY_COLOR,
    height:200,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,
    alignItems:'center',
  },
  titleApp: {
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:25,

  },
  footer: {
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:25,
    height:50,
  },
  body:{
    height:10,
  }

});
