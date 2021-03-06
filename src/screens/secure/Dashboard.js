import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import DashboardCard from "../../components/common/DashboardCard";
import { COLOR } from '../../components/helpers/helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'
import { logOut } from '../../store/action/auth';



const {width, height} = Dimensions.get("window")

class Dashboard extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    showBal: false
  }
  render() {
    const { firstName, email, phoneNumber} = this.props
    return (
        <View style={styles.container}>
        {/* topmost view start */}
        <View style={[styles.row, {
          justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 5
          }]}>
          <View>
            <Text style={{
              fontWeight: "normal",
              marginLeft: 5,
              fontSize: 15,
              // fontFamily: "monospace"
              }}>Welcome {firstName} </Text>
          </View>
          <View style={[styles.row, {width: 170, justifyContent: "space-around", paddingVertical: 10}]}>
            <TouchableOpacity
            onPress={ () => this.props.navigation.navigate("Profile")  } >
            <Icon name="md-contact" size={30}  />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon name="ios-information-circle-outline" size={30}  />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.logOut() }
            >
            <Icon name="md-exit" size={30}  />
            </TouchableOpacity>
          </View>
        </View>
        {/* topmost view end */}
        <View style={{width: '100%', height: 1, borderWidth: 1, borderColor: "#bdbdbd7a"}} />

       <View style={[styles.row, {
         backgroundColor: "white",
         width: '100%',
         justifyContent: "space-between",
         paddingHorizontal: 5,
         paddingVertical: 5,
         }]}>
          <Text>Total Balance: {this.state.showBal ? 'N0' : 'XX'}
          </Text>
          <TouchableOpacity onPress={ () => this.setState({showBal: !this.state.showBal}) }>
          <Text>
            {this.state.showBal ? 'Hide' : 'Show'}
          </Text>
          </TouchableOpacity>
        </View>

       <ScrollView>
       <DashboardCard
       cardTitle="News Feed"
       iconName="md-bulb"
       cardText=" Get real time news updates as they happen around the world"
       onPress={() => this.props.navigation.navigate("NewsFeed")}
       />
       <DashboardCard
       cardTitle="Airtime Recharge"
       iconName="md-card"
       cardText=" Recharge your MTN, GLO, Airtel and 9mobile lines"
       onPress={() => this.props.navigation.navigate("Airtime")}

       />
       <DashboardCard
       cardTitle="Image to Text Converter"
       iconName="md-images"
       cardText="Convert your images with text to document files"
       onPress={() => this.props.navigation.navigate("ImageToText")}
       />
       <DashboardCard
       cardTitle="Tetris Game"
       iconName="logo-xbox"
       cardText="Relex. Learn in diffuse mode."
       onPress={() => this.props.navigation.navigate("TetrisGame")}
       />
       <DashboardCard
       cardTitle="Planner"
       iconName="md-globe"
       cardText="Relex. Learn in diffuse mode."
       onPress={() => this.props.navigation.navigate("Planner")}
       />
       <DashboardCard
       cardTitle="Others Services"
       iconName="logo-buffer"
       cardText="Some proposed services coming soon "
      //  onPress={() => this.props.navigation.navigate("OtherServices")}             //  onPress={() => alert(" Working on it ")}
       onPress={() => alert(" Working on it ")}

       />
       </ScrollView>


      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: COLOR.themeBackground   // "#8d8d8d7a"

  },
  row: {
    flexDirection: "row"
  }
})

const mapStateToProps = state => {
  return {
    firstName: state.auth.firstName,
    phoneNumber: state.auth.phoneNumber,
    email: state.auth.email
  }
}
export default connect(mapStateToProps, {logOut})(Dashboard)
