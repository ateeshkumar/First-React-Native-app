import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Formdata = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [display,setDisplay] = useState(false);
  return (
    <View style={styles.view}>
        <Text style={styles.text}>Form Component</Text>
        <TextInput
        style={styles.textInput}
        placeholder='Enter Your Name'
        value={name}
        onChangeText={(text)=>setName(text)}
        />
        <TextInput
        style={styles.textInput}
        placeholder='Enter Your Email'
        value={email}
        onChangeText={(text)=>setEmail(text)}
        />
        <TextInput
        style={styles.textInput}
        placeholder='Enter Your Password'
        value={password}
        secureTextEntry={true}
        onChangeText={(text)=>setPassword(text)}
        />
        <View style={styles.button}>
            <Button style={styles.button} title='Print Data'
            onPress={()=>{
                setDisplay(true)
            }}/>
        </View>
        
        <Button style={styles.button} title='Clear Data'
        onPress={()=>{
            setName('');
            setEmail('');
            setPassword('');
            setDisplay(false)
        }}/>

        <View>
            {
                display ?
                <View>
                    <Text style={styles.text}>Name is: {name}</Text>
                    <Text style={styles.text}>Email is: {email}</Text>
                    <Text style={styles.text}>Password is: {password}</Text>
                </View>:
                <Text style={styles.text}>Data Print Here...</Text>
            }
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    textInput:{
        fontSize:15,
        borderWidth:3,
        borderRadius:5,
        borderColor:'red',
        margin:10,
        padding:10
    },
    text:{
        fontSize:20
    },
    view:{
        borderColor:'red',
        borderWidth:4,
        padding:20,
        margin:10
    },
    button:{
        marginBottom:20,
        fontSize:15
    }
})

export default Formdata