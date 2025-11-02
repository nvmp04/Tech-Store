import React, { useState } from 'react';
import TopBar from './TopBar';
import NavMenu from './NavMenu';
import './styles/Header.css'
import { PiPhone} from 'react-icons/pi';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = ({ cart }) => {
  return (
    <>
      <TopBar />
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>TECH STORE</h1>
              <span>LAPTOP NHẬP KHẨU</span>
            </div>

            <div className="search-bar">
              <input type="text" placeholder="Tìm kiếm sản phẩm..." />
              <button type="button">TÌM KIẾM</button>
            </div>

            <div className="header-actions">
              <div className="header-action">
                <PiPhone className='category-icon'/>
                <div className="action-text">
                  <small>Tư vấn</small>
                  <strong>0909.123.456</strong>
                </div>
              </div>
              <Link to="/cart" className="header-action">
                
                <div className="action-text">
                  <FaShoppingCart className='category-icon' />
                  <strong>{cart} sản phẩm</strong>
                </div>
                {cart > 0 && <span className="badge">{cart}</span>}
              </Link>
            </div>
          </div>
        </div>
      </header>
      <NavMenu />
    </>
  );
};

export default Header;
