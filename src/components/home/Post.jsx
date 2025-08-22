import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Bookmark, Comment,Heart,Dots,Share } from '../../utils/Icons'
import FitImage from './FitImage'
import ReadMore from '@fawazahmed/react-native-read-more';


const Post = ({post}) => {
  return (
    <View style={styles.post} >
     
     
      <View style={styles.header} >
   
    <View style={styles.username} >
      <Image  source={{uri:post.user.avatar}}  style={styles.avatar} />
      <Text style={styles.title}  > {post.user.name} </Text>
    </View>

    <Dots/>
     
      </View>
    
    <FitImage  src={post.image} />  

    <View style={styles.content} >

      <View style={styles.actions} >

        <View style={styles.leftActions} >
          
          <TouchableOpacity style={styles.action} >
            <Heart size={24} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} >
            <Comment  />
          </TouchableOpacity  >

          <TouchableOpacity  style={styles.action} >
            <Share  />
          </TouchableOpacity>

          

        </View>

        <View  style={styles.rightActions} >
        <TouchableOpacity>
            <Bookmark  />
          </TouchableOpacity>
        </View>

      </View>

    

    <View>
      <Text style={styles.likes} >{post.likes} likes </Text>
    </View>

<ReadMore 
    seeLessStyle={{color:"#999"}}
    seeLessText='Daha Az'
    seeMoreText='Daha Fazla'
    seeMoreStyle={{color:"#999"}}
    numberOfLines={2}>
      <Text style={styles.user}> {post?.user.name} </Text>
   {post?.description}  
    </ReadMore>

     {post.comments > 0 && (
      <TouchableOpacity  style={{paddingBottom:7}} activeOpacity={0.7} >
        <Text style={styles.comments} >{post.comments} comments </Text>
      </TouchableOpacity>
     )  }

     <View>
      <Text style={styles.date} >{post.date}</Text>
      <Text  style={styles.translation} >See Transition</Text>
     </View>
    </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  post:{
    marginBottom:30,
  },
  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:15,
    marginVertical:10,
  },
  username:{
    flexDirection:"row",
    alignItems:"center"

  },
  avatar:{
    width:30,
    height:30,
    borderRadius:15,
    marginRight:10,
    },
    title:{
      fontSize:14,
      fontWeight:"600",
    },
    content:{
      paddingHorizontal:15,
    },
    actions:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      height:40,
      
    },
    leftActions:{
      flexDirection:"row"
    },
    action:{
      marginRight:12,
    },
    likes:{
      fontWeight:"600",
      marginVertical:4,
    },
    user:{
      fontWeight:"700",
    },
    comments:{marginTop:5,
      opacity:0.5
    },
    date:{
      fontSize:13,
      opacity:0.5,
    },
    translation:{
      fontSize:13,
      fontWeight:"600",
      marginTop:7
    }
})