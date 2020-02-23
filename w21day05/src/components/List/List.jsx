import React from "react";
import ListItem from "./ListItem";
export default class List extends React.Component {
  state = {
    todos: [...this.props.todos]
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todos.length != this.props.todos.length) {
      this.setState({ todos: [...this.props.todos] });
    }
  }
  handleFilter = val => {
    if (val === "Completed") {
      this.setState(state => {
        let completed = this.props.todos.filter(
          item => item.completed === true
        );
        state.todos = [...completed];
        return state;
      });
    } else if (val === "Pending") {
      this.setState(state => {
        let pending = this.props.todos.filter(item => item.completed !== true);
        state.todos = [...pending];
        return state;
      });
    } else {
      this.setState({ todos: [...this.props.todos] });
    }
  };
  render() {
    const { handleComplete, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <select
          class="selectpicker"
          onChange={e => this.handleFilter(e.target.value)}
        >
          <option selected="selected">All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
        <ul className="list-group pb-5">
          {this.state.todos.map((todo, idx) => (
            <ListItem
              todo={todo}
              key={idx}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      </div>
    );
  }
}
