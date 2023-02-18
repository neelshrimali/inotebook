import AddNote from "./AddNote";
import React, { useContext, useEffect, useRef, useState } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/noteContext";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchAllNotes, editNote } = context;
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: "asd" });

  useEffect(() => {
    fetchAllNotes();
    // eslint-disable-next-line
  }, []);
  const updateNote = (currentNote)=>{
    ref.current.click();
    setNote({id:currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag})
  };
  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refclose.current.click();
    // addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value});
  };

  const ref = useRef(null);
  const refclose = useRef(null);
  return (
    <>
      <AddNote />
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    placeholder="title"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}

                    onChange={onChange}
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="form-label">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  ></input>
                </div>                
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
