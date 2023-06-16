import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';

import Layout from "./Components/Layout";
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Function from "./Components/function";
import Blogs from "./Components/class"

export default function Myapp(){
  return(
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path='function' element={<Function />} />
            <Route path="Blogs" element={<Blogs />} />
        </Route>
    </Routes>
</BrowserRouter>


  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Myapp/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
