import React from'react';
import './vendingMachine.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './navBar'

import Snack from './snack';
import Home from './home';


export default function VendingMachine() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:name" element={<Snack />} />
            </Routes>
        </BrowserRouter>
    )
}