import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

var st_red={color:'red'}
var st_bigBlue={color:'blue', fontWeight:'bold', fontSize:30}

export default function App() {
  return (
    <View style={{paddingTop: 50}}>
      <Text style={st_red}>just red</Text>
      <Text style={st_bigBlue}>just bigBlue</Text>
      <Text style={[st_bigBlue, st_red]}>bigBlue, then red</Text>
      <Text style={[st_red, st_bigBlue]}>bigBlue, then red 2</Text>
      <Text style={[st_bigBlue, st_red, {fontSize: 20}]}>bigBlue, then red, then 20</Text>
    </View>
  );
}
