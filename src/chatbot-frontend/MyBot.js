import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';

import {Chatbot} from 'react-chatbot-kit';

function MyBot() {
    return (
      <div className="App">
        <header className="App-Header">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
        </header>

      </div>
    );
  }
  
  export default MyBot;