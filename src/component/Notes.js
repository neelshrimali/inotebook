import AddNote from "./AddNote";
import React, { useContext, useEffect } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/noteContext";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes,fetchAllNotes } = context;
  useEffect(()=>{
    fetchAllNotes()
  },[])
  return (
    <>
      <AddNote />
      <div className="row my-3">
        { notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
