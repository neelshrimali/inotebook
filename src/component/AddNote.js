import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault(); 
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" })
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value});
  };
  return (
    <div className="container my-3">
      <h1>Add a Note.</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title" value={note.title} 
            onChange={onChange} minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description" value={note.description}
            onChange={onChange} minLength={5} required
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag" value={note.tag}
            onChange={onChange}
          ></input>
        </div>
        <div className="col-auto">
          <button
            disabled={note.title.length <5 || note.description.length < 5 }
            type="submit"
            className="btn btn-primary mb-3"
            onClick={handleClick}
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
