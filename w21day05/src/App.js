import React from "react";
import UserInput from "./components/UserInput/UserInput";
import "./App.css";
import List from "./components/List/List";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        task: "Fake example item #1",
        due: "Tue, Feb 25, 2020 12:16 PM",
        timeStamp: "Thu Feb 13 2020 09:57",
        completed: false
      },
      {
        id: 2,
        task: "Fake example item #2",
        due: "Thu Feb 13 2020 10:57",
        timeStamp: "Thu Feb 13 2020 09:57",
        completed: true
      }
    ],
    input: "",
    due: "",
    edit: 0,
    editTask: ""
  };

  handleDueState = date => {
    let options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    let dmy = date.toLocaleString("en-US", options);
    let time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    console.log(dmy + " " + time);
    this.setState({ due: `${dmy} ${time}` });
  };
  handleInputState = e => {
    this.setState({ input: e.target.value });
  };
  handleAddToDo = e => {
    e.preventDefault();
    let timeStamp = new Date();
    let options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    let dmy = timeStamp.toLocaleString("en-US", options);
    let time = timeStamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

    let todo = {
      task: this.state.input,
      due: this.state.due,
      timeStamp: `${dmy} ${time}`,
      completed: false
    };

    let todoNew = null;
    if (this.state.due == "") {
      console.log("click");
      todoNew = { ...todo, due: todo.timeStamp };
      this.setState({
        todos: [
          ...this.state.todos,
          { ...todoNew, id: this.state.todos.length + 1 }
        ]
      });
      return;
    }
    this.setState({
      todos: [...this.state.todos, { ...todo, id: this.state.todos.length + 1 }]
    });
  };
  handleComplete = todo => {
    this.setState(state => {
      state.todos.map((item, idx) => {
        if (todo.id === item.id) {
          // console.log(state.todos[idx].completed);
          state.todos[idx].completed = true;
        }
      });
      return state;
    });
  };
  handleDelete = todo => {
    // console.log("click");
    let filtered = this.state.todos.filter(item => item !== todo);
    // console.log(filtered);
    this.setState({ todos: [...filtered] });
  };
  handleEditState = todo => {
    this.setState({ edit: 1, input: todo.task, editTask: todo.task });
    // let updatedTask = prompt("Enter new Task ", todo.task);
  };

  todoEdit = e => {
    e.preventDefault();
    let timeStamp = new Date();
    let options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    let dmy = timeStamp.toLocaleString("en-US", options);
    let time = timeStamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    let todo = null;
    if (this.state.due != "") {
      todo = {
        task: this.state.input,
        due: this.state.due
      };
    } else {
      todo = {
        task: this.state.input,
        due: `${dmy} ${time}`
      };
    }

    this.setState(state => {
      state.todos.map((item, idx) => {
        if (this.state.editTask === item.task) {
          // console.log(state.todos[idx].completed);
          state.todos[idx].task = todo.task;
          state.todos[idx].due = todo.due;
        }
      });
      state.input = "";
      state.edit = 0;
      return state;
    });
  };
  render() {
    const { todos, input, edit } = this.state;
    return (
      <div className="container">
        <h1 className="display-4 text-center py-1">To-Do App</h1>

        <UserInput
          handleAddToDo={this.handleAddToDo}
          handleDueState={this.handleDueState}
          handleInputState={this.handleInputState}
          input={input}
          edit={edit}
          todoEdit={this.todoEdit}
        />
        <List
          todos={todos}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEditState}
        />
      </div>
    );
  }
}

export default App;
