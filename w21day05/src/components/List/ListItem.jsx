import React from "react";

export default function ListItem({
  todo,
  handleComplete,
  handleDelete,
  handleEdit
}) {
  return (
    <li
      className={`${
        !todo.completed ? "border border-danger" : "border border-success"
      } list-group-item list-group-item-action d-block align-items-center justify-content-around mb-1`}
    >
      <span className="item-text">
        <h5 className="d-inline">{todo.task}</h5>{" "}
      </span>

      <div className="d-inline-flex float-right mt-3">
        {!todo.completed ? (
          <button
            className="edit-me btn btn-primary btn-sm mr-1"
            onClick={() => handleComplete(todo)}
          >
            Complete
          </button>
        ) : null}
        {!todo.completed ? (
          <button
            className="edit-me btn btn-secondary btn-sm mr-1"
            onClick={() => handleEdit(todo)}
          >
            Edit
          </button>
        ) : null}

        <button
          className="delete-me btn btn-danger btn-sm"
          onClick={() => handleDelete(todo)}
        >
          Delete
        </button>
      </div>
      <div className="mt-1">
        Due:<b> {todo.due}</b>
      </div>
      <div>
        <p className="small mb-0 lead">
          Created on <b>{todo.timeStamp}</b>
        </p>
      </div>
    </li>
  );
}
