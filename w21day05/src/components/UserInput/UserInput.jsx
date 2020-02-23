import React from "react";
import TodoDate from "./TodoDate";

export default class UserInput extends React.Component {
  clearInput = () => {};
  render() {
    const {
      handleDueState,
      handleInputState,
      handleAddToDo,
      input,
      edit,
      todoEdit
    } = this.props;
    return (
      <div className="jumbotron p-3 shadow-sm">
        <form
          onSubmit={
            !edit ? e => handleAddToDo(e) : e => todoEdit(e, this.input)
          }
        >
          <div className="d-flex ">
            <input
              value={edit ? input : undefined}
              name="item"
              autoFocus
              autoComplete="off"
              className="form-control mt-3"
              placeholder="Enter Todo With Deadline"
              type="text"
              style={{
                flex: "1",
                display: "inline-block",
                marginRight: "15px",
                maxWidth: "80%"
              }}
              onChange={e => handleInputState(e)}
            />

            <div style={{ flex: "0" }}>
              <TodoDate handleDueState={handleDueState} />
              {!edit ? (
                <button
                  className="btn btn-primary mt-2 "
                  style={{ minWidth: "100%" }}
                >
                  Add New Item
                </button>
              ) : (
                <button
                  className="btn btn-primary mt-2 "
                  style={{ minWidth: "100%" }}
                >
                  Update Item
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
