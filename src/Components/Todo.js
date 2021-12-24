import React, { Component } from "react";
import * as styles from "./Todo.module.scss";
export default class Todo extends Component {
  render() {
    return (
      <div
        className={styles.todo}
        onClick={() => this.props.deleteItem(this.props.key)}
      >
        <ul>
          <li>{this.props.todo}</li>
        </ul>
      </div>
    );
  }
}
