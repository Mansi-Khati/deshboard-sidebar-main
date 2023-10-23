import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Customers from './pages/Customers.jsx';
import Income from './pages/Income.jsx';
import Promote from './pages/Promote.jsx';
import Product from './pages/Product.jsx';
import Help from './pages/Help.jsx';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element=
            {<>
              <Header />
              <Dashboard />
            </>} 
          />
          <Route path="/dashboard" element=
            {<>
              <Header />
              <Dashboard />
            </>} 
          />
          <Route path="/customers" element=
            {<>
              <Header />
              <Customers />
            </>} 
          />
          <Route path="/promote" element=
            {<>
              <Header />
              <Promote />
            </>} 
          />
          <Route path="/income" element=
            {<>
              <Header />
              <Income />
            </>} 
          />
          <Route path="/product" element=
            {<>
              <Header />
              <Product />
            </>} 
          />
          <Route path="/help" element=
            {<>
              <Header />
              <Help />
            </>} 
          />
        </Routes>
        </Sidebar>
      
    </BrowserRouter>
  );
};

export default App;