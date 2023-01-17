import React from 'react';
import HeaderMain from './component/HeaderMain';
import TopBar from './component/TopBar';

import './component/headerMain.css';
import './component/topBar.css';

function Header() {
  return (
    <div>
      <TopBar></TopBar>
      <HeaderMain></HeaderMain>
    </div>
  );
}

export default Header;
