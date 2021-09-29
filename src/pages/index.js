import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Header, Container, Button, Grid, Segment, Form, Select, List, Label } from 'semantic-ui-react';

import Task from '../components/Task';
import NewTaskForm from '../components/NewTaskForm';

const HomePage = () => {
  const initialNewTask = {
    name: '',
    color: '',
  }

  const [newTaskOpen, setNewTaskOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState(initialNewTask);
  const [list, setList] = React.useState([]);

  function openNewTask() {
    setNewTaskOpen(true);
  }

  function closeNewTask() {
    setNewTaskOpen(false);
  }

  function showNewTaskOpen() {
    console.log(newTaskOpen);
  }

  function addNewTask() {
    const listClone = [ ...list ];
    listClone.push(newTask);
    setList(listClone);

    setNewTask(initialNewTask);
    closeNewTask();
  }

  // const taskList = [];

  // list.forEach((task, index) => {
  //   taskList.push(
  //     <Task 
  //       key={`${task.name}-${index}`} 
  //       name={task.name} 
  //       color={task.color} 
  //     />
  //   );
  // });

  function editTask(index, newTask) {
    console.log('edit', index);
    const newList = list.map((task, i) => {
      if (i !== index) return task;
      return newTask;
    })
    setList(newList);
  }

  function deleteTask(index) {
    const newList = [...list];

    newList.splice(index, 1);

    setList(newList)
  }

  const taskList = list.map((task, index) => {
    return (
      <Task 
          key={`${task.name}-${index}`} 
          name={task.name} 
          color={task.color}
          editTask={editTask}
          deleteTask={deleteTask}
          index={index}
      />
    );
  });

  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid.Column width='4'>
            <Button icon='bars' onClick={showNewTaskOpen}></Button>
          </Grid.Column>
          <Grid.Column width='8'>
            <Header textAlign='center' as='h1'>Todo List</Header>
          </Grid.Column>
          <Grid.Column textAlign='right' width='4'>
            <Button color='green' icon='plus' onClick={openNewTask}></Button>
          </Grid.Column>
        </Grid>

        {newTaskOpen ? <NewTaskForm closeNewTask={closeNewTask} newTask={newTask} setNewTask={setNewTask} addNewTask={addNewTask} /> : null}

        <List>{taskList}</List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;