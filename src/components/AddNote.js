import React from 'react'

const AddNote = () => {
  return (
   <div className="container">
    <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title"  name="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" id="desc" name='desc' />
  </div>
 
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
   </div>
  )
}

export default AddNote
