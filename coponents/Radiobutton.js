import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Radiobutton = () => {
  return (
    <View style={styles.main}>
        <TouchableOpacity> 
            <Text style={[styles.radioText]}>Radio 1</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    radioText:{
        fontSize:25
    }
})

export default Radiobutton