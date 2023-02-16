import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import { Home } from "./component/Home";
import About from "./component/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./component/Alert";

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message={"Notes will be added soon."} />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>} />            
          <Route exact path="/about" element={<About/>} />            
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
