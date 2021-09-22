import React from 'react';

import { Segment, Header, Form, Select, Button, Input } from 'semantic-ui-react';

const NewTaskForm = ({ closeNewTask, newTask, setNewTask, addNewTask }) => {

    function changeNewTask(e, { value, name }) {
      const newTaskClone = { ...newTask };
      newTaskClone[name] = value;
      setNewTask(newTaskClone);
    }

    return (
    <React.Fragment>
        <Segment>
          <Header as='h2'>New Task</Header>
          <Form>
            <Form.Field  
              control={Input}
              label='Task Name'
              placeholder='Enter task name...'
              value={newTask.name}
              onChange={changeNewTask}
              name='name'
            />
            <Form.Field  
              control={Select}
              label='Task Color'
              placeholder='Choose task color...'
              options={[
                { text: 'Purple', value: 'purple' },
                { text: 'Violet', value: 'violet' },
                { text: 'Pink', value: 'pink' },
              ]}
              value={newTask.color}
              onChange={changeNewTask}
              name='color'
            />
            <Button.Group fluid>
              <Button type='button' color='red' onClick={closeNewTask}>Cancel</Button>
              <Button.Or />
              <Button type='button' color='green' onClick={addNewTask}>Add Task</Button>
            </Button.Group>
          </Form>
        </Segment>
          </React.Fragment>
    );
};

export default NewTaskForm;