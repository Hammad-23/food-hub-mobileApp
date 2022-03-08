import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TouchableOpacityBase
} from 'react-native';
import Input from '../../components/input'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Home() {
  return (
    <SafeAreaView style={{flex:1}} >
    <ScrollView>
     
     <View style={style.header}>
       <View style={style.headerBar}>
       <View style={{width:260,marginLeft:10}}>
         <Input title="Search" />
       </View>
       <View style={{marginRight:10}}>
         <TouchableOpacity style={style.searchBtn}>
            <AntDesign name='search1' color="black" size={25} />
         </TouchableOpacity>
       </View>
       </View>
     </View>
     <View style={style.content}>


        <TouchableOpacity style={style.card} >
          <View>
            <Image style={style.img} s source={{uri:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"}}  />
          </View>
          <View style={style.resNrating}>
             <View style={{marginLeft:20}}>
               <Text style={{fontSize:17,fontWeight:"bold"}}>Beef Steak</Text>
               <Text>Italian, Karachi</Text>
               <Text style={{color:"orange"}} >$200</Text>
             </View>
             <View style={style.rating}>
               <Text style={{color:"#FFFF"}} >4.5</Text>
             </View>
          </View>
        </TouchableOpacity>


     </View>
     
     </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  bg: {
    resizeMode: 'contain',
    height: '100%',
    alignItems: 'center',
  },
  header:{
    backgroundColor:"#cd432f",
    height:140,
    justifyContent:"center",
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25
  },
  searchBtn:{
    backgroundColor:"#FFFF",
    height:50,
    width:50,
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center"
  },
  headerBar:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
  content:{
    width:"100%",
    alignItems:"center",
    marginTop:20
   
  },
  img:{
    height:100,
    borderTopLeftRadius:20,
    borderTopRightRadius:20

  },
  card:{
    width:"85%",
    borderRadius:20,
    backgroundColor:"#FFFF",
    
  },
  resNrating:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:10,
      marginBottom:30,
      alignItems:"center"
  },
  rating:{
    backgroundColor:"green",
    width:45,
    height:20,
    borderRadius:15,
    alignItems:"center",
    marginRight:20
  }
});
