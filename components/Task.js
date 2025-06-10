import React from "react";
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
          <View style={styles.boxItem}>
            <View style={styles.square}></View>
            <Text style={styles.text}>{props.text}</Text>
          </View>
          <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    alignItems:'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  boxItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',  // IF THE SENTENCE GETS TOO LONG IT PUTS IT IN THE NEXT LINE
    alignItems: 'center'
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.7,
    borderRadius: 5,
    marginRight: 10
  },
  text: {
    maxWidth: '80%'
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5
  }
})

export default Task;