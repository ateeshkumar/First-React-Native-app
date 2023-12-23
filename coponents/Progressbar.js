import React, { useState } from 'react'
import { ActivityIndicator, Button, StyleSheet, View } from 'react-native'

const Progressbar = () => {
    const [pro,setPro] = useState(false)
  return (
    <View style={styles.main}>
        {
            pro ?  <ActivityIndicator size={200} color={'red'} animating={pro}/>:null
        }
       
        <Button title='progress Bar' onPress={()=>setPro(!pro)}/>
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Progressbar