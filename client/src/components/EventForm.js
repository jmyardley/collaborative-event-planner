import React from "react";

export function Input() {
  return (
    <div className="form-group">
      <input className="form-control" />
    </div>
  );
}

export function TextArea() {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="8" />
    </div>
  );
}

export function ListItem() {
  return (
    <div className="form-group">
        <li>
          <input className="form-control" />
        </li>
    </div>
  );
}

export function FormBtn() {
  return (
    <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      Add Event
    </button>
  );
}