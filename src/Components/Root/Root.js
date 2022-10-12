import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Footer } from '../Footer/Footer';

export const statisticsContext = createContext([]);
const Root = () => {
    const quizData = useLoaderData();
    return (
        <statisticsContext.Provider value={quizData}>
            <Nav />
            <Outlet />
            <Footer />
        </statisticsContext.Provider>
    );
};

export default Root;
