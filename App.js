import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from './src/util/colors';
import Form from './src/components/Form';
import { useEffect, useState } from 'react';
import Footer from './src/components/Footer';
import Body from './src/components/Body';
export default function App() {
  const [capital,setCapital] = useState(null)
  const [interes,setInteres] = useState(null)
  const [months,setMonths] = useState(null)
  const [total,setTotal] = useState({})
  const [errorMessage,setErrorMessage] = useState('')
  useEffect(() => {  
    enviar() 
  }, [capital,interes,months])
  const enviar = () =>{
    setTotal({})
    setErrorMessage('')
    if (!capital) {
      setErrorMessage('Favor de ingresar un capital')
    } else if (!interes) { 
        setErrorMessage('Favor de ingresar un interes')
      } else  if (!months) {
          setErrorMessage('Favor de ingresar los meses')
        }else{
          
          const i = interes/100
          const fee = capital / ((1-Math.pow(i+1,-months))/i)
          setTotal({ 
            monthlyFee: fee.toFixed(2),
            totalPayable: (fee * months).toFixed(2)
          })
          console.log(total)

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
              setMonths={setMonths}
              enviar={enviar}/>
              
      </View>

      <Body 
      errorMessage={errorMessage}
      total = {total} 
      capital={capital} 
      interes={interes}
      months ={months}/>
      
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
    height:250,
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
  

});
