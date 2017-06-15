import React from "react";
import { connect } from "react-redux";
import { addTask } from "../../../actions";
import "./styles.css";

// export default () => (
//   <div className="AddTask">
//     <input className="AddTask-field" type="text" />
//   </div>
// );

let AddTask = ({ dispatch }) => {
  let input;

  return (
    <div className="AddTask">
      <form
        className="AddTask-form"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTask(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
          className="AddTask-field"
        />
        {/*<button type="submit">
          Add Todo
        </button>*/}
      </form>
    </div>
  );
};

AddTask = connect()(AddTask);
export default AddTask;
