import React, { useContext } from 'react'
import AddNote from './AddNote'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';

const Notes = () => {
  const context = useContext(noteContext);
  const {notes} = context;
  return (
    <>
    <AddNote/>
   <div className="container">
    <h3>You notes</h3>
    <div className="row">
    {notes.map((note)=>{
      return <div className="col-md-4"><NoteItem note = {note}/>
      </div>
    })}
   </div>
   </div>
   </>
  )
}

export default Notes
