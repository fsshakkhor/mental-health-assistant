import config from "./config";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    this.actionProvider.getChatbotResponse(message);
    //setting the client name in the first question
    // if(!config.hasOwnProperty('clientName')){
    //     let sections = message.split(' ');
    //     config.clientName = sections[sections.length - 1];
    //     this.actionProvider.handleIntro(config.clientName);
    //     return;
    // }
    // this.actionProvider.handleDog();


  }
}

export default MessageParser;
