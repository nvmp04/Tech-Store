import React, { useState } from 'react';
import './styles/NavMenu.css'
import { Link } from 'react-router-dom';

const menuItems = [
  { id: 1, name: 'TRANG CHỦ', hasSubmenu: false, to:''},
  { id: 2, name: 'LAPTOP', hasSubmenu: true, 
    items: [
      {name: 'Laptop Gaming', to: '/products/gaming'}, 
      {name:'Laptop Văn phòng', to: '/products/office'}, 
      {name:'Laptop Đồ họa', to: '/products/gaming'}, 
      {name:'Macbook', to: '/products/macbook'}]} ,
  { id: 3, name: 'PC & LINH KIỆN', hasSubmenu: true, items: [{ name: 'PC Gaming'}, { name: 'Mainboard'}, { name: 'CPU'}, { name: 'VGA'}, { name: 'RAM'}, { name: 'SSD'}] },
  { id: 4, name: 'PHỤ KIỆN', hasSubmenu: true, items: [{ name: 'Chuột'}, { name: 'Bàn phím'}, { name: 'Tai nghe'}, { name: 'Webcam'}] },
  { id: 5, name: 'KHUYẾN MÃI', hasSubmenu: false },
  { id: 6, name: 'TIN TỨC', hasSubmenu: false },
  { id: 7, name: 'LIÊN HỆ', hasSubmenu: false }
];

const NavMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="navigation">
      <div className="container">
        <ul className="nav-menu">
          {menuItems.map(item => (
            <li 
              key={item.id}
              className={activeMenu === item.id ? 'active' : ''}
              onMouseEnter={() => item.hasSubmenu && setActiveMenu(item.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link to={item.to}>
                {item.name}
                {item.hasSubmenu && <span className="arrow">▼</span>}
              </Link>
              {item.hasSubmenu && activeMenu === item.id && (
                <ul className="submenu">
                  {item.items.map((sub, idx) => 
                  <li key={idx}><Link to={sub.to}>{sub.name}</Link></li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
