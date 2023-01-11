import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ display: 'flex', gap: '40px' }}>
      <Link to="/host">Host</Link>
      <Link to="/app1">App 1</Link>
      <Link to="/app2">App 2</Link>
    </nav>
  );
};

export default Navigation;
