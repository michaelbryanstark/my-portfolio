import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Me from "./Components/Me";


const App = () => (
  <Router>
    <Navbar>
      <Routes>
        <Route exact path='/me' element={<Me/>}></Route>
      </Routes>
    </Navbar>
  </Router>
)

export default App;