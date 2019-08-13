import {Component} from "react";
import React from "react";

class Messages extends Component {
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const {name, text} = message;
    return (
          <div className="text">{name}: {text}</div>
    );
  }
}

export default Messages;