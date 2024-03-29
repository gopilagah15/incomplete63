import React from 'react'

const NoteItem = (props) => {
 const{note} = props
  return (
    <div>
       <div className="card my-3">
         <div className="card-body">
          <div className="container d-flex align-items-center">
        <h5 className="card-title">{note.title}</h5>
        <i className="fa-solid fa-trash mx-2"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <p className="card-text">{note.description}</p>
  </div>
</div>
    </div>
  )
}

export default NoteItem
