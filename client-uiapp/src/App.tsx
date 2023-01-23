import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

function App() {
  const [activities, setActivities] = useState([]);

  useState(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        console.log(response);
        setActivities(response.data)
      })
  }
  )

  return (
    <div >
      <Header as='h2' icon={'users'} content='Jadiyo User'/>
        <List>
        {
          activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.titile}
            </List.Item>
          )
          )
        }
        </List>
        <Button content='Test Button'></Button>
        <h1>Hi.. Try Again</h1>
        {/* {
          activities.map((activity: any) =>
          (
            <p>{activity.venue} </p>
          )
          )
        } */}
    </div>
  );
}

export default App;
