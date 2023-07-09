import { Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/collection">Collection</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/collection" element={<div>Collection</div>} />
      </Routes>
    </div>
  );
};
