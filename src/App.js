import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { IconButton } from '@mui/material';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in react
  // useEffect = run code on a condition in react

useEffect(() => {
  // run once when the app component loads
  db.collection('messages')
  .orderBy('timestamp', 'desc')
  .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
  })
}, [] )

  useEffect(() => {
    // const username = prompt('Please enter your name')
    setUsername(prompt('Please enter your name'))
  }, [] ) //Condition 


  const sendMessage = (event) => {
    // all the logic to send a message goes here
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img style={{height:30,width:30,borderRadius:10}} src="https://newsresolution.com/wp-content/uploads/2021/01/katherine-Copy.jpg" alt='FireSend'/>
      <h1>🚀🚀FireSend🚀🚀</h1>
      <h2>Welcome {username} </h2>


      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input className='app__input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className='app__iconButton' disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}> 
            <SendRoundedIcon />
          </IconButton>
        </FormControl> 
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
