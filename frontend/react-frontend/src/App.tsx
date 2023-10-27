import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {HomePage} from "./layouts/HomePage/HomePage";
import {SearchCoffeePage} from "./layouts/SearchCoffeesPage/SearchCoffeePage";

export const App = () => {
    return (
        <>
            <Navbar/>
            {/*<HomePage/>*/}
            <SearchCoffeePage/>
            <Footer/>
        </>
    );
}