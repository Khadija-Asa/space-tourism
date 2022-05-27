import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/destination" element={<Destination />}/>
        <Route path='/crew' element={<Crew />}/>
        <Route path='/technology' element={<Technology />}/>
        <Route path="*" element={<NotFound />}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
