import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

function Circle() {
  return <View style={st_circle}/>;
}

function Blank() {
  return <View style={[st_circle, {backgroundColor: undefined, borderWidth: 0}]}/>;
}
var st_circle={
  width:40,
  height:40,
  backgroundColor:'rgb(0,200,255)',
  borderRadius:20,
  borderWidth:1,
  margin:2,
};

var st_dice ={
  backgroundColor:'rgb(255,240,200)',
  padding:10,
  margin:10,
}

var st_text={
  textAlign:'center',
  fontSize:20,
  margin:5,
}

function Dice(props) {
  if (props.num==1) {
    return (
    <View style={st_dice}>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
    </View>
  );
  } else if (props.num==2) {
    return (
    <View style={st_dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
    </View>
  );
  } else if (props.num==3) {
    return (
    <View style={st_dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
    </View>
    );
  } else if (props.num==4) {
    return (
    <View style={st_dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
    </View>
  );
  } else if (props.num==5) {
    return (
    <View style={st_dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
    </View>
  );
  } else if (props.num==6) {
    return (
    <View style={st_dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
    </View>
  );
  }
}

export default function App() {
  const [firstN, setfirstN]=useState(1)
  const [secondN, setsecondN]=useState(1)
  return (
    <View style={{padding: 50, flex: 1}}>
      <Text style={st_text}>Double Dice</Text>
      <Text style={st_text}>{firstN+secondN}</Text>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <Dice num={firstN}/>
        <Dice num={secondN}/>
      </View>
      <View style={{marginHorizontal:100, marginVertical:30}}>
        <Button title="Roll" onPress={
          function() {
            setfirstN(Math.floor(Math.random()*6+1));
            setsecondN(Math.floor(Math.random()*6+1));}}/>
      </View>
    </View>
  );
}