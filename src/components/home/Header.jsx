import { StyleSheet,  TouchableOpacity,  View } from 'react-native'
import {Logo, Plus, Heart, Messenger} from "../../utils/Icons"
import { COLORS } from '../../theme/color'

const {RED,WHİTE} =COLORS


const Header = () => {
  return (
    <View style={styles.header} >
        <Logo/>
        
        <View style={styles.actions} >
      <TouchableOpacity  activeOpacity={0.6} >
        
        <View  style={styles.dotContainer} >
          <View style={styles.dot} />
        </View>
        
        <Heart  size={24}   />
      </TouchableOpacity>
     
      <TouchableOpacity  activeOpacity={0.6} >
        
          <View  style={styles.dotContainer} >
             <View style={styles.dot} />
            </View>
        
        <Messenger size={24}   />
      </TouchableOpacity>
      
      <TouchableOpacity  activeOpacity={0.6} >
        
        
        
        <Plus size={24}   />
      </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal: 15,
        height: 45,
        alignItems: 'center',
        paddingBottom:4,    
},
    actions:{
        flexDirection: 'row',
        gap:30,
        },
        dotContainer:{
            position:"absolute",
            right:0,
            top:0,
            zIndex:2,
            width:9,
            height:9
        },
        dot:{
            backgroundColor:RED,
            width: 8,
            height: 8,
            borderRadius:8
            
        }
})