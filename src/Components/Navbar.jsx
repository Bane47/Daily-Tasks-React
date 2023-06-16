import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import Blogs from './Blogs';
// import Function from "./function";
// import Class from "./class"
export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="layout" element={<Layout />}>
                    <Route path='Calculate' element={<Calculate />} />
                    <Route path='Blogs' element={<Blogs />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}