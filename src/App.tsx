import React from 'react';
import Labs  from './Labs';
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import { Navigate } from 'react-router-dom';


// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <HashRouter>
<div>
<Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
</Routes>

</div>
</HashRouter>
  );
}

export default App;
