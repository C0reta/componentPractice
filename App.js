import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, Button} from 'react-native';


function Ask(props) {
  return (
    <View>
    <Text>Question #{props.num}</Text>
    <View style={{flexDirection: "row", alignItems:'center', marginBottom:10}}>
      <Text>Enter your {props.thing}</Text>
      <TextInput style={{flex:1, marginHorizontal:10, borderBottomWidth:1}}/>
      <Button titleStyle={{fontSize:40}} title='OK'/>
    </View>
    </View>
  );

}

function App() {
  return (
    <View style={{padding: 50}}>
    <Ask num={1} thing="name"/>
    <Ask num={2} thing="age"/>
    </View>
  );
}

export default App;