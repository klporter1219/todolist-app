import React, { useState } from 'react';

import { List, Grid, Label, Button } from 'semantic-ui-react';

import EditTaskForm from './EditTaskForm';

const Task = ({ name, color, editTask, deleteTask, index }) => {
    const [editOpen, setEditOpen] = useState(false);

    function editCurrentTask() {
      setEditOpen(true);
    }

    function deleteCurrentTask() {
      deleteTask(index);
    }

    function saveTask(task) {
      editTask(index, task);
    }

    return (
        <React.Fragment>
            {
              editOpen && <EditTaskForm task={{ name, color }} setTask={saveTask} closeEditTask={() => setEditOpen(false)} />
            }
            <List.Item>
            <Grid columns='2'>
              <Grid.Column>
                <Label color={color} size='big'>
                  {name}
                </Label>
              </Grid.Column>
              <Grid.Column textAlign='right'>
                <Button onClick={deleteCurrentTask} icon='trash' color='red'></Button>
                <Button onClick={editCurrentTask} icon='pencil' color='orange'></Button>
              </Grid.Column>
            </Grid>
          </List.Item>
        </React.Fragment>
    );
};

export default Task;