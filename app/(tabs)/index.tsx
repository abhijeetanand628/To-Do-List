import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from '../../components/task';

export default function HomeScreen() {
  return (
   <View style={styles.container}>
    <View style={styles.taskWrapper}>
      <Text style={styles.text}>Today's Tasks</Text>
      <View style={styles.items}>
        {/* THIS IS WHERE THE TASKS WILL GO */}
        <Task text={'Task 1'}/>
        <Task text={'Task 2'}/>
      </View>
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,           
    backgroundColor: '#E8EAED'
  },    
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  text: {
    fontWeight: 'bold' ,
    fontSize: 24
  },
  items:{

  }
});