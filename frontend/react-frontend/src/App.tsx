import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {ExploreTopCoffees} from "./layouts/HomePage/ExploreTopCoffees";

function App() {
  return (
      <>
        <Navbar/>
        <ExploreTopCoffees/>
      </>
  );
}

export default App;
