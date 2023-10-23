import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {ExploreTopCoffees} from "./layouts/HomePage/ExploreTopCoffees";
import {Carousel} from "./layouts/HomePage/Carousel";
import {Heroes} from "./layouts/HomePage/Heroes";

function App() {
  return (
      <>
          <Navbar/>
          <ExploreTopCoffees/>
          <Carousel/>
          <Heroes/>
      </>
  );
}

export default App;
