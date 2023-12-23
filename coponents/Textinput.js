import { useState } from "react"
import { StyleSheet, TextInput, View,Text, Button } from "react-native"

export default  Textinput=()=>{
    const [name,setName] = useState('');
    return(
        <View>
            <Text style={styles.text}>Enter Your Name</Text>
            <Text style={{textAlign:'center',fontSize:30}}>{name}</Text>
            <TextInput style={styles.textInput}
            placeholder="Enter Your name"
            value={name}
            onChangeText={(text)=>setName(text)}
            />
            <Button title="Clear Input" onPress={()=>setName('')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:15,
        color:'red'
    },
    textInput:{
        fontSize:15,
        borderWidth:3,
        borderRadius:5,
        borderColor:'red',
        margin:10,
        padding:10
    }
})