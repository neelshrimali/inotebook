import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (prop) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all notes
  const fetchAllNotes = async (title, description, tag) => {
    //api call
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlOGVmNDM5N2FjZTEzMjdhNjZmZGY2In0sImlhdCI6MTY3NjM3MDk3NX0.jJMsOBbcCRfzOOT8Jley_wDXRgEa-VtKOcsnmE2U2cM",
      },
    });
    const json = await response.json();
    setNotes(json);
  };
  //Add a  note
  const addNote = async (title, description, tag) => {
    //api call
    const url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlOGVmNDM5N2FjZTEzMjdhNjZmZGY2In0sImlhdCI6MTY3NjM3MDk3NX0.jJMsOBbcCRfzOOT8Jley_wDXRgEa-VtKOcsnmE2U2cM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();    

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
  const deleteNote = async (id) => {
    const url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlOGVmNDM5N2FjZTEzMjdhNjZmZGY2In0sImlhdCI6MTY3NjM3MDk3NX0.jJMsOBbcCRfzOOT8Jley_wDXRgEa-VtKOcsnmE2U2cM",
      },
    });
    const json = response.json();
    const newnotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newnotes);
  };
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //api call
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlOGVmNDM5N2FjZTEzMjdhNjZmZGY2In0sImlhdCI6MTY3NjM3MDk3NX0.jJMsOBbcCRfzOOT8Jley_wDXRgEa-VtKOcsnmE2U2cM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    let newnotes = JSON.parse(JSON.stringify(notes));
    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = newnotes[index];
      if (element._id === id) {
        newnotes[index].title = title;
        newnotes[index].description = description;
        newnotes[index].tag = tag;
        break;
      }      
    }
    setNotes(newnotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, fetchAllNotes }}
    >
      {prop.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
