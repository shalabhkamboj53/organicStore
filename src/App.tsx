import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteMap from '../RouteMap.ts';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import { fetchProducts } from './redux/actions/productActions.ts';
import { useAppDispatch } from './redux/store.ts';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const App: React.FC = () => {  
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  

  const ErrorFallback = () => (
    <div role="alert">
      <p>Something went wrong &nbsp;&nbsp;&nbsp; ; (</p>
    </div>
  );

  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {RouteMap.map((el, id) => (
            <Route path={el.path} key={id} Component={el.page} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ReactErrorBoundary>
  );
};

export default App;
