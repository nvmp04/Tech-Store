import {
  FaGamepad,
  FaBriefcase,
  FaApple,
  FaMemory,
  FaKeyboard,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./styles/CategorySidebar.css";

const categories = [
  { name: "Laptop Gaming - Đồ Họa", icon: <FaGamepad />, category: 'gaming'},
  { name: "Laptop Văn phòng", icon: <FaBriefcase />, category: 'office'},
  { name: "Apple Macbook", icon: <FaApple />, category: 'macbook'},
  { name: "RAM - SSD", icon: <FaMemory />, },
  { name: "Kho phụ kiện", icon: <FaKeyboard />, },
];

const CategorySidebar = () => {
  const location = useLocation();

  // Ẩn sidebar nếu không ở trang chủ
  if (location.pathname !== "/") return null;

  return (
    <aside className="category-sidebar">
      <div className="category-header">
        <FaBars className="menu-icon" />
        <span className="header-text">DANH MỤC</span>
      </div>
      <ul className="category-list">
        {categories.map((cat, i) => (
          <Link to={'/products/' + cat.category} key={i} className="category-item">
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
