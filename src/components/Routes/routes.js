import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../../components/pages/Home.jsx';

const routes = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/aboutUs '/>

        </Routes>
    );
};

export default Routes;