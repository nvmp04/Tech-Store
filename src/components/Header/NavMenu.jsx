import React, { useState } from 'react';
import './styles/NavMenu.css'

const menuItems = [
  { id: 1, name: 'TRANG CHỦ', hasSubmenu: false },
  { id: 2, name: 'LAPTOP', hasSubmenu: true, items: ['Laptop Gaming', 'Laptop Văn phòng', 'Laptop Đồ họa', 'Macbook'] },
  { id: 3, name: 'PC & LINH KIỆN', hasSubmenu: true, items: ['PC Gaming', 'Mainboard', 'CPU', 'VGA', 'RAM', 'SSD'] },
  { id: 4, name: 'PHỤ KIỆN', hasSubmenu: true, items: ['Chuột', 'Bàn phím', 'Tai nghe', 'Webcam'] },
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
              <a href="#">
                {item.name}
                {item.hasSubmenu && <span className="arrow">▼</span>}
              </a>
              {item.hasSubmenu && activeMenu === item.id && (
                <ul className="submenu">
                  {item.items.map((sub, idx) => <li key={idx}><a href="#">{sub}</a></li>)}
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
