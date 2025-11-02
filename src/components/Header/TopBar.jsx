import React, { useState } from 'react';
import './styles/TopBar.css'
import { Link } from 'react-router-dom';
import AuthModal from '../../features/auth/pages/AuthModal';

function TopBar () {
  const [login, setLogin] = useState(false);
  return (
    <>
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span> Hotline: 0909.123.456</span>
        </div>
        <div className="top-bar-right">
          <a href="#">Tài khoản</a>
          <a href="#" onClick={()=>setLogin(true)}>Đăng nhập</a>
        </div>
      </div>
    </div>
    <AuthModal
      open={login}
      onClose={()=>setLogin(false)}
    />
    </>
  )
};

export default TopBar;
