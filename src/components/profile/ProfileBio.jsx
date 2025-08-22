import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/color'

const ProfileBio = () => {
  return (
    <View style={styles.bio} >
      <Text style={styles.name} >username</Text>
      <Text style={styles.description} >Lorem ipsum dolor 👽👻sit amet, consectetur adipisicing 🧠👣elit. Consequatur tenetur culpa exercitationem 🐣🐱‍💻reprehenderit totam corporis?</Text>
      <Text style={styles.link}>Link goes here</Text>

      <TouchableOpacity style={styles.editProfileButton}  activeOpacity={0.7} >
        <Text style={styles.editProfileText} >Edit Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileBio

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal:15,
    paddingVertical:10,
  },
  name: {
    fontWeight:"700",
    color:COLORS.BLACK
  },
  description: {
    marginVertical:5,
    color:COLORS.BLACK
  },
  link:{
    fontWeight:"400",
    color:COLORS.BLUE
  },
  editProfileButton:{
    borderColor:COLORS.GRAY,
    borderWidth:1,
    marginVertical:10,
    alignItems:"center",
    paddingVertical:5,
    borderRadius:5,
  },
  editProfileText:{
    fontWeight:"700",
    color:COLORS.BLACK,
  },
})