import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const Responsive = () => {
  return (
    <>
    <View style={styles.main}>
        <TouchableHighlight>
            <Text style={[styles.button1,styles.success]}>Success</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button1,styles.primery]}>Primery</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button1,styles.warning]}>Warning</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button1,styles.error]}>Error</Text>
        </TouchableHighlight>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    main:{
        flex:1
    },
    button1:{
        backgroundColor:'#bbb',
        color:'#fff',
        fontSize:20,
        margin:10,
        padding:10,
        textAlign:'center',
        borderRadius:10
    },
    success:{
        backgroundColor:'green'
    },
    primery:{
        backgroundColor:'blue'
    },
    warning:{
        backgroundColor:'orange'
    },
    error:{
        backgroundColor:'red'
    },
})

export default Responsive