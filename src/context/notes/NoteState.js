import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState =(props) =>{
    const notesInitial=[{
        "_id": "65d3280d8bebd2e0e1a67dce",
        "user": "65d0735af6f510e9dd3c766c",
        "title": "lets learn ",
        "description": "Django",
        "tag": "general",
        "date": "2024-02-19T10:06:05.389Z",
        "__v": 0
      },
      {
        "_id": "65d328168bebd2e0e1a67dd0",
        "user": "65d0735af6f510e9dd3c766c",
        "title": "lets learn ",
        "description": "PHP Laraval",
        "tag": "general",
        "date": "2024-02-19T10:06:14.310Z",
        "__v": 0
      },
      {
        "_id": "65d3281b8bebd2e0e1a67dd2",
        "user": "65d0735af6f510e9dd3c766c",
        "title": "lets learn ",
        "description": "React",
        "tag": "general",
        "date": "2024-02-19T10:06:19.950Z",
        "__v": 0
      },
      {
        "_id": "65d328248bebd2e0e1a67dd4",
        "user": "65d0735af6f510e9dd3c766c",
        "title": "lets learn ",
        "description": "React Native",
        "tag": "general",
        "date": "2024-02-19T10:06:28.515Z",
        "__v": 0
      }];
      const [notes,setNotes] = useState(notesInitial);
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;