import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RouteMap from '../RouteMap.ts';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import ProductData from '../JsonData/ProductData.ts';
import { setProducts } from './redux/actions/productActions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setProducts(ProductData));
  }, [dispatch]);
  
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
