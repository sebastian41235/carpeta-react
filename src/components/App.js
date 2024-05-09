import React from "react";
import {BrowserRouter, Route, Routes} from  "react-router-dom"
import App from './components/App';

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/otro" element={<Maestro/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

