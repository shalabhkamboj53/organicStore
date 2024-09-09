import React, { useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import RouteMap from '../RouteMap.ts';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import ProductData from '../JsonData/ProductData.ts';
import { setProducts } from './redux/actions/productActions';
import { syncCartWithLocalStorage, setCartAmount, setCartQuantity } from './redux/actions/cartActions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  
  useEffect(() => {
    dispatch(syncCartWithLocalStorage());
    dispatch(setProducts(ProductData));
  }, [dispatch]);
  
  let CartAmount = useMemo(() => {
  let sum = 0
    if (cart.items) {
      cart.items.forEach((el)=>{
        sum += el.quantity * el.rate
      })
      return sum
    }
    return 0
  }, [cart])

  let CartQuantity = useMemo(() => {
    let sum = 0
    if (cart.items) {
      cart.items.forEach((el)=>{
        sum += el.quantity
      })
      return sum
    }
    return 0
  }, [cart])

  useEffect(() => {    
    dispatch(setCartAmount(CartAmount))
  }, [CartAmount])

  useEffect(() => {
    dispatch(setCartQuantity(CartQuantity))
  }, [CartQuantity])
  
  


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
