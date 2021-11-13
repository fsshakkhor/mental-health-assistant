import main
from flask import Flask , request


app = Flask(__name__)

@app.route('/response')
def bot_response():
    msg = request.args['msg']

    new_msg = msg.replace('+',' ').lower()
    print(msg,new_msg)
    response = main.chatbot_response(new_msg)[0]
    return response
    

if __name__ == '__main__':
    app.run()
