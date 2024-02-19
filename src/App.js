import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <h1 className="text-center">iNotebook</h1>
      <NoteState>
      <Routes>
          <Route exact path='/home' element={<Home />} /> 
          <Route exact path='/about' element={<About />} /> 
          </Routes>
          </NoteState>
    </BrowserRouter> 
    </>
  );
}

export default App;
