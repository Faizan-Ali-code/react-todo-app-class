import React, { Component } from "react";
import * as styles from "./App.module.scss";
import Todo from "./Components/Todo";
export default class App extends Component {
  state = {
    input: "",
    error: false,
    todos: [],
  };
  inputHandler = (event) => {
    const value = event.target.value;

    // console.log(value + " value");
    // console.log(this.state.input + " input");

    if (
      value.length >= 10 ||
      (value.length < 5 && this.state.input.length > value.length)
    ) {
      this.setState({ ...this.state, input: value, error: true });
    } else {
      this.setState({ ...this.state, input: value, error: false });
    }
  };
  onClickHandler = () => {
    this.setState({
      ...this.state,
      input: "",

      todos: [...this.state.todos, this.state.input],
    });
  };
  deleteHandler = (id) => {
    console.log("tried to delete");
    const newTodo = [...this.state.todos];
    newTodo.splice(id, 1);
    this.setState({
      ...this.state,
      todos: newTodo,
    });
  };
  render() {
    // console.log(this.state.input);
    let inputClasses = styles.input;
    let buttonClasses = styles.button;
    if (this.state.error) {
      inputClasses = [styles.input, styles.inputError].join(" ");
      buttonClasses = [styles.button, styles.errorButton].join(" ");
    }

    const todos = this.state.todos.map((element, index) => {
      return (
        <Todo
          todo={element}
          key={index}
          id={index}
          deleteItem={() => this.deleteHandler(index)}
        />
      );
    });
    const errorMsg = (
      <span className={styles.errorMsg}>
        Please enter some text greater than 5 and less than 10 to add to todo
        list
      </span>
    );
    return (
      <div className={styles.App}>
        <p>Add Items and Then Remove respective item upon click</p>
        <input
          type="text"
          autoFocus
          className={inputClasses}
          onChange={(e) => this.inputHandler(e)}
          value={this.state.input}
        />
        {this.state.error ? errorMsg : null}
        <button
          className={buttonClasses}
          onClick={() => this.onClickHandler()}
          disabled={this.state.error || !this.state.input}
        >
          Add item
        </button>
        {todos}
      </div>
    );
  }
}
