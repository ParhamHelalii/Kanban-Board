import React, { useState, useContext } from "react";
import "./CreateTicket.scss";
import { BoardContext } from "../../context/BoardContext";
import { v4 as uuidv4 } from "uuid";

const Create = () => {
  const { createTicket } = useContext(BoardContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtask, setSubtask] = useState("");
  return (
    <div className=" pop-up-ticket">
      <h3 className="heading-m">Add New Ticket</h3>
      <div>
        {" "}
        <label htmlFor="" className="body-m">
          Title
        </label>
        <input
          type="text "
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="" className="body-m">
          Description
        </label>
        <input
          type="text "
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="" className="body-m">
          Subtask
        </label>
        <input
          type="text "
          placeholder="Subtasks"
          value={subtask}
          onChange={(e) => setSubtask(e.target.value)}
        />
      </div>
      <button className="create-task-button"> + Add New Task</button>
      <button
        className="create-task-button"
        onClick={() => {
          createTicket({
            id: uuidv4(),
            title,
            description,
            tasks: [subtask],
          });
          setTitle("");
          setDescription("");
          setSubtask("");
        }}
      >
        {" "}
        Create Task
      </button>
    </div>
  );
};

export default Create;
