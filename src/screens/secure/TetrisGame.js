import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


class TetrisGame extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={ () => navigation.navigate("tabDashboard") }>
        <Icon name="md-arrow-back" size={30} style={{marginLeft: 10, marginRight: 10}} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Game</Text>
      </View>
    )
  });
  render() {
    return (
      <View>
        <Text> shopping cart </Text>
      </View>
    )
  }
}

export default TetrisGame
