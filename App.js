import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

var st_red={color:'red'}
var st_bigBlue={color:'blue', fontWeight:'bold', fontSize:30}

export default function App() {
  return (
    <View style={{paddingTop: 50, alignItems:'baseline'}}>
      <Text style={{fontSize:30, backgroundColor: 'cyan'}}>ABC</Text>
      <Text style={{fontSize:40, backgroundColor: 'yellow'}}>ABC</Text>
      <Text style={{fontSize:50, backgroundColor: 'lightgreen'}}>ABC</Text>
      <Button title="Touch me"/>
    </View>
  );
}