import React from "react";
import {Routes,Route} from "react-router-dom";
import Pricing from './routes/Pricing'
import Contact from "./routes/Contact";
import Training from "./routes/Training";

import Home from './routes/Home'


function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Pricing' element={<Pricing/>} />
    <Route path='/Training' element={<Training/>} />
    <Route path='/Contact'  element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
