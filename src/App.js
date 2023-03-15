import "./App.css";
import "./Components/style.css";
import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./views/Home/Home";
import Landing from "./views/Landing/Landing";
function App() {
  
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exatc path="/home" element={<Home/>}/>
    </Routes>
    
    </>
        

  );
}

export default App;
