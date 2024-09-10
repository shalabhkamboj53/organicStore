import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteMap from '../RouteMap.ts';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {  
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          {RouteMap.map((el, id) => (
            <Route path={el.path} key={id} Component={el.page} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
  );
};

export default App;
