import React from "react";
import {
  FaLaptop,
  FaGamepad,
  FaBriefcase,
  FaCode,
  FaApple,
  FaMemory,
  FaKeyboard,
  FaPlug,
  FaFan,
  FaBars,
} from "react-icons/fa";
import { MdLaptopMac } from "react-icons/md";
import "./styles/CategorySidebar.css";

const categories = [
  { name: "Máy tính xách tay", icon: <FaLaptop /> },
  { name: "Laptop Gaming - Đồ Họa", icon: <FaGamepad /> },
  { name: "Laptop Văn phòng", icon: <FaBriefcase /> },
  { name: "Laptop Lập trình", icon: <FaCode /> },
  { name: "Laptop cao cấp", icon: <MdLaptopMac /> },
  { name: "Apple Macbook", icon: <FaApple /> },
  { name: "RAM - SSD", icon: <FaMemory /> },
  { name: "Kho phụ kiện", icon: <FaKeyboard /> }
];

const CategorySidebar = () => {
  return (
    <aside className="category-sidebar">
      <div className="category-header">
        <FaBars className="menu-icon" />
        <span className="header-text">DANH MỤC</span>
      </div>
      <ul className="category-list">
        {categories.map((cat, i) => (
          <li key={i} className="category-item">
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
