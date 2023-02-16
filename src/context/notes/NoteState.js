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
      _id: "63eb8114f15c7d86f364e2a0",
      user: "63e8ef4397ace1327a66fdf6",
      title: "mytitle1",
      description: "sadfdasfadsf1",
      tag: "sadfsfsd",
      date: "2023-02-14T12:39:48.033Z",
      __v: 0,
    },
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
      _id: "63eb8114f15c7d86f364e2a0",
      user: "63e8ef4397ace1327a66fdf6",
      title: "mytitle",
      description: "sadfdasfadsf",
      tag: "sadfsfsd",
      date: "2023-02-14T12:39:48.033Z",
      __v: 0,
    },
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
      _id: "63eb8114f15c7d86f364e2a0",
      user: "63e8ef4397ace1327a66fdf6",
      title: "mytitle",
      description: "sadfdasfadsf",
      tag: "sadfsfsd",
      date: "2023-02-14T12:39:48.033Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {prop.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
