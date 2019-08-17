import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import axios from "axios"
import './App.css';
import Messages from "./Messages";
import Input from "./Input";

class App extends Component {
  state = {
    messages: [{name:"shorty", "text": "you right"}],
    endpoint: "http://localhost:3001",
  }

  componentDidMount() {
    console.log('yo')
    console.log(`endpoint is ${this.state.endpoint}`)
    axios.get(`${this.state.endpoint}/messages`)
        .then(result => this.setState({ messages: result.data }))
}

  constructor() {
    super();
    this.state.socket = socketIOClient(this.state.endpoint);
    this.state.socket.on("receiveMessage", (message)=>{
      console.log('message received')
      let messages = this.state.messages
      messages.unshift(message);
      this.setState({messages});
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Super basic chat app</h1>
        </div>
        <Messages
          messages={this.state.messages}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }

onSendMessage = (message) => {
    console.log('emitting message')
    console.log(message)
    this.state.socket.emit("sendMessage", message);
  }
}
export default App;
