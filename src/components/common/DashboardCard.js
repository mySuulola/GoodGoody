import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR } from '../helpers/helpers';

const DashboardCard = props => {
  return (
   <TouchableOpacity
   onPress={props.onPress}
   >
   <View style={styles.card}>
         <View style={styles.wrapper}>
           <Icon name={props.iconName} size={55} style={styles.icon}  />
         </View>

       <View style={{justifyContent: "space-around"}}>
         <Text style={[styles.cardTitle, props.plan && { color: "rgba(34, 131, 211, 0.57)" }]}>{props.cardTitle}</Text>
         <Text style={styles.cardText} >{props.cardText}</Text>
       </View>
        </View>
   </TouchableOpacity>
  );
};

const styles = {
  card: {
    borderRadius: 15,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 100,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "rgb(250, 250, 250)"
  },
  icon: {
    marginRight: 10
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: "Roboto",
    color: "rgba(216, 49, 49, 0.7)"
  },
  cardText: {
    color: ' rgb(94, 97, 99)',
    marginRight: 30,
    paddingRight: 10,
    fontFamily: "san-serif-thin",
    marginVertical: 10,
    fontSize: 11
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  }
}

export default DashboardCard;
