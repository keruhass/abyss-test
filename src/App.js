import logo from './logo.svg';
import './App.scss';

import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';

import { useState } from 'react';

import { ItemContext } from './context';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
    errorElement: <LoginPage />
  },
  {
    path: "product",
    element: <ProductPage/>
  },
  {
    path: "cart",
    element: <CartPage/>
  },
  {
    path: "payment",
    element: <PaymentPage/>
  },
]);


function App() {

  const [items, setItems] = useState([
    // {id: 1, size: 'L', amount: 8},
  ])

  return (
    <ItemContext.Provider value={{
      items,
      setItems
    }}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ItemContext.Provider>
    
  );
}

export default App;
