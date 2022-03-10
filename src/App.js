import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './hocs/Layout';

import Welcome from './Components/Welcome';
import Me from './Components/Me';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => (
    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Welcome />}></Route>
                <Route exact path='/me' element={<Me />}></Route>
                <Route exact path='/projects' element={<Projects/>}></Route>
                <Route exact path='/contact' element={<Contact />}></Route>
            </Routes>
        </Layout>

    </Router>
);
export default App;