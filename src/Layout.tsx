import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
