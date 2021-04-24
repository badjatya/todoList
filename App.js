import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',
  },
  items: {
    marginTop:30,
  },
});

export default App;
