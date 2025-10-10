import React from 'react';
import './styles/TopBar.css'

const TopBar = () => (
  <div className="top-bar">
    <div className="container">
      <div className="top-bar-left">
        <span> Hotline: 0909.123.456</span>
      </div>
      <div className="top-bar-right">
        <a href="#">Tài khoản</a>
        <a href="#">Đăng nhập</a>
        <a href="#">Đăng ký</a>
      </div>
    </div>
  </div>
);

export default TopBar;
