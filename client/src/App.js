// import React, { Component } from "react";
// import socketIOClient from "socket.io-client";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       response: false,
//       endpoint: "http://localhost:4000"
//     };
//   }
//   componentDidMount() {
//     const { endpoint } = this.state;
//     const socket = socketIOClient(endpoint);
//     const user = "testUser1"
//     const recipient = "testUser2"
//     socket.emit('userRegister', user);
//     let message ={
//       author: user,
//       recipient: "WeAreOutHere",
//       message: "this is a test"
//     }
//     socket.emit("sendMessage", message);
//     socket.on("receiveMessage", (message)=>{
//       console.log("message received is ", message)
//     })
//   }
//   render() {
//     const { response } = this.state;
//     return (
//         <div style={{ textAlign: "center" }}>
//           {response
//               ? <p>
//                 The temperature in Florence is: {response} °F
//               </p>
//               : <p>Loading...</p>}
//         </div>
//     );
//   }
// }
// export default App;


import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import axios from "axios"
import './App.css';
import Messages from "./Messages";
import Input from "./Input";

class App extends Component {
  state = {
    messages: [{name:"shorty", "text": "you right"}],
    endpoint: "http://localhost:3002",
  }

  componentDidMount() {
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
          <h1>My Chat App</h1>
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
