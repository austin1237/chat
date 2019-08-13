import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: "",
    name: ""
  }

  onChange(e) {
    this.setState({text: e.target.value, name: this.state.name});
  }

  nameChange(e) {
    this.setState({text: this.state.text, name: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSendMessage(this.state);
    this.setState({text: "", name: this.state.name});
  }

  render() {
    return (
      <div className="Input">
        <input
            onChange={e => this.nameChange(e)}
            value={this.state.name}
            type="text"
            placeholder="Enter your username"
            autofocus="true"
          />
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autofocus="true"
          />
          <button>Send</button>
        </form>
      </div>

      
    );
  }
}

export default Input;