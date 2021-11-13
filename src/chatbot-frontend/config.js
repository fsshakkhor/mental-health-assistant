import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './dogPicture';

const botName = 'Relaxa';

const config = {
  initialMessages: [createChatBotMessage(`Hello my friend.`),
  createChatBotMessage(`How may I help you?`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
    
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;
