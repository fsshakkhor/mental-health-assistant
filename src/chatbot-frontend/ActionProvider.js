class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    getChatbotResponse(msg){
        var encoded_msg = msg.replaceAll(' ','+');
        var request_url = `response?msg=${encoded_msg}`;


        const response = fetch(request_url)
        .then(response => { 
          return response.text();
        }).then(data => {
          var message = this.createChatbotMessage(data);

          this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
          }));
        }).catch(error => {
          var message = this.createChatbotMessage("Sorry. I didn't understand.");
          this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
          }));          
        });


      }

    handleIntro(clientName) {
        const message = this.createChatbotMessage(`Hello ${clientName}. Nice to meet you.`);

        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));

      }

      handleDog() {
        const message = this.createChatbotMessage(
          "Here's a depression meme for u!",
          {
            widget: 'dogPicture',
          }
        );
    
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
  }
  
  export default ActionProvider;