import React from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const myAlert = () => {
  Alert.alert(
    "MyAlert",
    "Alert button pressed",
    [
      {
        text: "Cancel"
      },
      {
        text: "Ok"
      }
    ]
  )
}
export default function Index() {
  return (
    <View
      style={{  
        flexDirection: "column",
        backgroundColor: '#151d28',
        flex: 1
      }}
    >
      <View>
        {/*Header wrapper */}
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          {/*Needs text increased in size, flex direct, and alignment */}
          <Text style={{fontSize:48, paddingLeft:20, color: 'gray'}}>=</Text>
          <Text style={{fontSize:48}}>🦋</Text>
          <Text style={{fontSize:48, paddingRight:20 , color: 'gray'}}>#</Text>
        </View>
        {/*needs styling on each text object + unique styling for the highlighted one
        Also needs spacing styling*/}
        <View>
          <ScrollView horizontal={true} style={{paddingBottom: 10}}>
            <Text style={myStyles.highlightedTab}>Following</Text>
            <Text style={myStyles.myTab}>Game dev</Text>
            <Text style={myStyles.myTab}>Art</Text>
            <Text style={myStyles.myTab}>Weiners</Text>
            <Text style={myStyles.myTab}>Test</Text>
          </ScrollView>
        </View>
      </View>
      {/*Posts body, time for the big girl shit */}
      <ScrollView>
        {/**First post */}
        <View style={myStyles.post}>
          {/**Icon div */}
          <View style={{padding: 8}}>
            <Image source={{uri: "https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:hnmjuu5o7ognhpnmomhaucr2/bafkreiau4vxo46depixvi7al5na2gsm6sbnqkcmulacf77e645aq2bviwa@jpeg"}} style={myStyles.icon}></Image>
          </View>
          {/**Post content */}
          <View>
            {/**Header */}
            <View style={myStyles.postHeader}>
              <Text style={myStyles.postHeaderHandle}>Reposted by poqu</Text> {/**Dim this */}
              <Text style={myStyles.postHeaderText}>☁Sayu❄️<Text style={myStyles.postHeaderHandle}>@sayuupi.bsky.social</Text></Text>
            </View>
            <View> {/**Body */}
              <Text style={myStyles.postBody}>Sunday morning 🌻</Text>
               <Image source={{uri: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:hnmjuu5o7ognhpnmomhaucr2/bafkreif7pwvy6zdguo4l5jh3q4q46t5ptvdzuofshjbyyqdv7ksfsgi3qa@jpeg"}} style={myStyles.postImage}></Image>
            </View> 
            {/**Footer */}
            <View style={myStyles.postFooter}>
              <View style={myStyles.interactionContainer}>
                <Text style={myStyles.postButton}>💬</Text>
                <Text style={myStyles.postButton}>🔄</Text>
                <Text style={myStyles.postButton}>❤️</Text>
              </View>
              <View style={myStyles.shareContainer}>
                <Text style={myStyles.postButton}>🔖</Text>
                <Text style={myStyles.postButton}>📩</Text>
                <Text style={myStyles.postButton}>-</Text>
              </View>
            </View>
            
          </View>
        </View>
        {/**Second post */}
        <View style={myStyles.post}>
          {/**Icon div */}
          <View style={{padding: 8}}>
            <Image source={{uri: "https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:hnmjuu5o7ognhpnmomhaucr2/bafkreiau4vxo46depixvi7al5na2gsm6sbnqkcmulacf77e645aq2bviwa@jpeg"}} style={myStyles.icon}></Image>
          </View>
          {/**Post content */}
          <View>
            {/**Header */}
            <View style={myStyles.postHeader}>
              <Text style={myStyles.postHeaderHandle}>Reposted by poqu</Text> {/**Dim this */}
              <Text style={myStyles.postHeaderText}>☁Sayu❄️<Text style={myStyles.postHeaderHandle}>@sayuupi.bsky.social</Text></Text>
            </View>
            <View> {/**Body */}
              <Text style={myStyles.postBody}>Sunday morning 🌻</Text>
               <Image source={{uri: "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:hnmjuu5o7ognhpnmomhaucr2/bafkreif7pwvy6zdguo4l5jh3q4q46t5ptvdzuofshjbyyqdv7ksfsgi3qa@jpeg"}} style={myStyles.postImage}></Image>
            </View> 
            {/**Footer */}
            <View style={myStyles.postFooter}>
              <View style={myStyles.interactionContainer}>
                <Text style={myStyles.postButton}>💬</Text>
                <Text style={myStyles.postButton}>🔄</Text>
                <Text style={myStyles.postButton}>❤️</Text>
              </View>
              <View style={myStyles.shareContainer}>
                <Text style={myStyles.postButton}>🔖</Text>
                <Text style={myStyles.postButton}>📩</Text>
                <Text style={myStyles.postButton}>-</Text>
              </View>
            </View>
            
          </View>
        </View>
        {/**Third post + Alarm button */}
        <View style={myStyles.post}>
          {/**Icon div */}
          <View style={{padding: 8}}>
            <Image source={{uri: "https://cdn.bsky.app/img/avatar_thumbnail/plain/did:plc:hnmjuu5o7ognhpnmomhaucr2/bafkreiau4vxo46depixvi7al5na2gsm6sbnqkcmulacf77e645aq2bviwa@jpeg"}} style={myStyles.icon}></Image>
          </View>
          {/**Post content */}
          <View>
            {/**Header */}
            <View style={myStyles.postHeader}>
              <Text style={myStyles.postHeaderHandle}>Reposted by poqu</Text> {/**Dim this */}
              <Text style={myStyles.postHeaderText}>☁Sayu❄️<Text style={myStyles.postHeaderHandle}>@sayuupi.bsky.social</Text></Text>
            </View>
            <View> {/**Body */}
              <View style={myStyles.alertButton}>
                <Button title={"Click me!!"} onPress={myAlert}/>
              </View>
            </View> 
            {/**Footer */}
            <View style={myStyles.postFooter}>
              <View style={myStyles.interactionContainer}>
                <Text style={myStyles.postButton}>💬</Text>
                <Text style={myStyles.postButton}>🔄</Text>
                <Text style={myStyles.postButton}>❤️</Text>
              </View>
              <View style={myStyles.shareContainer}>
                <Text style={myStyles.postButton}>🔖</Text>
                <Text style={myStyles.postButton}>📩</Text>
                <Text style={myStyles.postButton}>-</Text>
              </View>
            </View>
            
          </View>
        </View>
      </ScrollView>
      {/**Footer */}
      <View style={myStyles.footerContainer}>
        <Text style={myStyles.footerButton}>🏠</Text>
        <Text style={myStyles.footerButton}>🔍</Text>
        <Text style={myStyles.footerButton}>💬</Text>
        <Text style={myStyles.footerButton}>🔔</Text>
        <Text style={myStyles.footerButton}>🐱</Text>
      </View>
    </View>
  );
}

const myStyles = StyleSheet.create({
  myTab: {
    paddingHorizontal:10,
    fontSize:24,
    fontWeight: 500,
    color: 'gray'
  },
  highlightedTab: {
    paddingHorizontal:10,
    fontSize:24,
    fontWeight: 500,
    textDecorationLine: 'underline',
    textDecorationColor: 'lightblue',
    color: 'white'
  },
  icon: {
    height:50,
    width:50,
    borderRadius: 50,
  },
  post: {
    flexDirection: 'row',
    marginVertical:8
  },
  postHeader: {
    flexDirection: 'column',
  },
  postHeaderText: {
    fontSize:18,
    color: 'white'
  },
  postHeaderHandle: {
    fontSize:16,
    color: 'gray'
  },
  postBody: {
    fontSize:16,
    color: 'white'
  },
  postImage: {
    marginVertical: 10,
    borderRadius: 15,
    height: 300,
    width: 300
  },
  postFooter: {
    flexDirection: 'row',
    paddingTop: 10
  }
  ,
  interactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 2,
    marginRight: 18
  },
  shareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 18
  },
  postButton: {
    fontSize: 24
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex:0,
    marginBottom: 'auto',
    paddingBottom: 25
    
  },
  footerButton: {
    fontSize:36
  },
  alertButton: {
    backgroundColor: 'lightblue',
    borderRadius: 15,
    borderColor: 'navy',
    borderWidth: 2
  }
})