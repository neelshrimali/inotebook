import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (prop) => {
  const notesInitial = [
    {
      _id: "63eb8114f15c7d86f364e2a0",
      user: "63e8ef4397ace1327a66fdf6",
      title: "mytitle",
      description: "sadfdasfadsf",
      tag: "sadfsfsd",
      date: "2023-02-14T12:39:48.033Z",
      __v: 0,
    },
    {
      _id: "63eb8114f15c7d86f364e2a1",
      user: "63e8ef4397ace1327a66fdf6",
      title: "mytitle1",
      description: "sadfdasfadsf1",
      tag: "sadfsfsd",
      date: "2023-02-14T12:39:48.033Z",
      __v: 0,
    },
    {
      _id: "63eb8114f15c7d86f364e2a02",
      user: "63e8ef4397ace1327a66fdf6",
      title: "mytitle",
      description: "sadfdasfadsf",
      tag: "sadfsfsd",
      date: "2023-02-14T12:39:48.033Z",
      __v: 0,
    },
    {
      _id: "63eb8114f15c7d86f364e2a021",
      user: "63e8ef4397ace1327a66fdf6",
      title: "mytitle",
      description: "sadfdasfadsf",
      tag: "sadfsfsd",
      date: "2023-02-14T12:39:48.033Z",
      __v: 0,
    },
    {
      _id: "63eb8114f15c7d86f364e2a012",
      user: "63e8ef4397ace1327a66fdf6",
      title: "mytitle",
      description: "sadfdasfadsf",
      tag: "sadfsfsd",
      date: "2023-02-14T12:39:48.033Z",
      __v: 0,
    },
    {
      _id: "63eb8114f15c7d86f364e2a021s",
      user: "63e8ef4397ace1327a66fdf6",
      title: "mytitle",
      description: "sadfdasfadsf",
      tag: "sadfsfsd",
      date: "2023-02-14T12:39:48.033Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a  note
  const addNote = (title, description, tag) => {
    //TODO api call
    console.log("adding a note");
    const note = {
      _id: "63eb8114f15c7d86f364e2a0asd21s",
      user: "63e8ef4397ace1327a66fdf6",
      title: title,
      description: description,
      tag: tag,
      date: "2023-02-14T12:39:48.033Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete a note
  const deleteNote = () => {};
  //Edit a note
  const editNote = () => {};
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {prop.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
