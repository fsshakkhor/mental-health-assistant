import logo from './logo.svg';
import './App.css';

import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {Chatbot} from "react-chatbot-kit"

import ActionProvider from './chatbot-frontend/ActionProvider';
import config from './chatbot-frontend/config';
import MessageParser from './chatbot-frontend/MessageParser';
import MyBot from './chatbot-frontend/MyBot';
import 'react-chatbot-kit/build/main.css'
import Diagnosis from './diagnosis-frontend/diagnosis';

function App() {
  return(
    <div>
      <Chatbot/> 
    </div>
  )
}

export default App;
