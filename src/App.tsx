import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteMap from '../RouteMap.ts';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import { fetchProducts } from './redux/actions/productActions.ts';
import { useAppDispatch } from './redux/store.ts';

const App: React.FC = () => {  

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  

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
