import React, { Component } from "react";
import "./UserInput.scss";

export default class UserInput extends Component {
  state = {
    name: "",
    email: "",
    city: ""
  };
  render() {
    const { handleInputSubmit } = this.props;
    return (
      <div className="container mt-5 userInput" style={{ width: "auto" }}>
        <form
          style={{ display: "flex" }}
          onSubmit={e => {
            e.preventDefault();
            handleInputSubmit(this.state);
          }}
        >
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">City</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter City"
              onChange={e => this.setState({ city: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
