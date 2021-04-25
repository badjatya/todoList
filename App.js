import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Platform, TextInput } from 'react-native';
import Task from "./components/Task"

const App = () => {
  return (
    <View style={styles.container}>

      {/* Today's Task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}>
          {/* This is where all the task will go */}
          <Task text="Task 1" />
          <Task text="Task 2" />
          <Task text="Task 3" />
        </View>
      </View>

      {/* Inputs for task  */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Enter a Task'}  />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop:70,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',
  },
  items: {
    marginTop:30,
  },
  writeTaskWrapper:{
    position:"absolute",
    bottom: 60,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:"#FFF",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#FFF",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#C0C0C0",
    borderWidth:1,
  },
  addText:{

  },
});

export default App;
