import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BurgerMenu, Plus,Dropdown } from '../../utils/Icons'

const ProfileHeader = () => {
  return (
    <View style={styles.header}>
    <View style={{flexDirection:"row", alignItems:"center", gap:5  }} >
      <Text style={styles.username} >username</Text>

        <Dropdown  />

       </View>
    
   
   <View style={{flexDirection:"row", alignItems:"center", gap:20 }} >
    <TouchableOpacity activeOpacity={0.7} >
      <Plus size={30} />
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.7} >
      <BurgerMenu  />
    </TouchableOpacity>

   </View>
    
    
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:15,
    alignItems:"center",
  },
  username:{
    fontSize:20,
    fontWeight:"bold",
  },
  
})