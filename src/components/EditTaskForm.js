import React, { useState } from 'react';

import { Segment, Header, Form, Select, Button, Input } from 'semantic-ui-react';

const NewTaskForm = ({ closeEditTask, task, setTask }) => {

    const [localTask, setLocalTask] = useState(task);

    function saveTask() {
        setTask(localTask);
        closeEditTask();
    }

    function changeTask(e, { name, value }) {
        setLocalTask({ ...localTask, [name]: value });
    }

    return (
    <React.Fragment>
        <Segment>
          <Header as='h2'>Edit Task</Header>
          <Form>
            <Form.Field  
              control={Input}
              label='Task Name'
              placeholder='Enter task name...'
              value={localTask.name}
              onChange={changeTask}
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
              value={localTask.color}
              onChange={changeTask}
              name='color'
            />
            <Button.Group fluid>
              <Button type='button' color='red' onClick={closeEditTask}>Cancel</Button>
              <Button.Or />
              <Button type='button' color='green' onClick={saveTask}>Save</Button>
            </Button.Group>
          </Form>
        </Segment>
          </React.Fragment>
    );
};

export default NewTaskForm;