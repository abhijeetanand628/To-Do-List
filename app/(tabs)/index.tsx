import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity, Keyboard } from 'react-native';
import Task from '../../components/Task';

export default function HomeScreen() {

  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const deleteTask = (index) => {
    let itemsCopy =[...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
   <View style={styles.container}>
    <View style={styles.taskWrapper}>
      <Text style={styles.text}>What to do To-Day?</Text>
      <View style={styles.items}>
        {/* THIS IS WHERE THE TASKS WILL GO */}
        {
          taskItems.map((item, index)=> {
            return (
              <TouchableOpacity key={index} onPress={()=> deleteTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })
        }
        {/* <Task text={'Task 1'}/>
        <Task text={'Task 2'}/> */}
      </View>
    </View>

    {/* WRITE A TASK SECTION */}

    {/* THIS KEY-BOARD-AVOING-VIEW POPS UP THE KEYBOARD IN THE PHONE WITHOUT TAKING UP THE SPACE OF THE SENTENCES. */}

    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder='Write a task' value={task} onChangeText={text => setTask(text)}/> 

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addIcon}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
    marginTop: 20
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom: 50,
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1.2,
    width: 250,
  },
  addIcon:{
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1.2
  },
  icon:{

  }
});