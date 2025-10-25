import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/FilterBar.css";

export default function FilterBar({ onFilterChange }) {
  const navigate = useNavigate();
  const { category } = useParams();

  const [filters, setFilters] = useState({
    priceRange: "all",
    brand: "",
    sort: "default",
    gpu: "",
    ram: "", 
    cpu: "", 
    storage: "", 
  });

  // ====== Các danh sách bộ lọc theo danh mục ======
  const filterConfig = useMemo(() => {
    switch (category) {
      case "macbook":
        return {
          title: "MacBook",
          brands: [], 
          cpu: ["M1", "M2", "M3"],
          storage: ["256GB", "512GB", "1TB", "2TB"],
          price: true,
          sort: true,
        };
      case "gaming":
        return {
          title: "Laptop Gaming",
          brands: ["ASUS", "MSI", "Acer", "Lenovo", "Razer"],
          gpu: ["RTX 4060", "RTX 4070", "RTX 4080", "RTX 4090"],
          ram: ["16GB", "32GB", "64GB"],
          price: true,
          sort: true,
        };
      case "office":
        return {
          title: "Laptop Văn phòng",
          brands: ["Dell", "HP", "Lenovo", "Acer"],
          cpu: ["Intel i5", "Intel i7", "Ryzen 5", "Ryzen 7"],
          ram: ["8GB", "16GB", "32GB"],
          price: true,
          sort: true,
        };
      default:
        return {
          title: "Tất cả sản phẩm",
          brands: ["ASUS", "Dell", "Acer", "Apple", "MSI", "Lenovo", "HP"],
          price: true,
          sort: true,
        };
    }
  }, [category]);

  // ====== Cập nhật state + gọi callback ======
  const updateFilter = (key, value) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  // ====== Điều hướng khi đổi danh mục ======
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === "all") navigate("/products");
    else navigate(`/products/${value}`);
  };

  return (
    <div className="filter-bar">
      {/* --- Chọn danh mục chính --- */}
      <div className="filter-group">
        <label>Danh mục:</label>
        <select value={category || "all"} onChange={handleCategoryChange}>
          <option value="all">Tất cả</option>
          <option value="gaming">Gaming</option>
          <option value="office">Văn phòng</option>
          <option value="macbook">Macbook</option>
        </select>
      </div>

      {/* --- Thương hiệu --- */}
      {filterConfig.brands?.length > 0 && (
        <div className="filter-group">
          <label>Thương hiệu:</label>
          <select
            value={filters.brand}
            onChange={(e) => updateFilter("brand", e.target.value)}
          >
            <option value="">Tất cả</option>
            {filterConfig.brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* --- GPU (gaming) --- */}
      {filterConfig.gpu && (
        <div className="filter-group">
          <label>GPU:</label>
          <select
            value={filters.gpu}
            onChange={(e) => updateFilter("gpu", e.target.value)}
          >
            <option value="">Tất cả</option>
            {filterConfig.gpu.map((gpu) => (
              <option key={gpu} value={gpu}>
                {gpu}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* --- CPU (office / macbook) --- */}
      {filterConfig.cpu && (
        <div className="filter-group">
          <label>CPU:</label>
          <select
            value={filters.cpu}
            onChange={(e) => updateFilter("cpu", e.target.value)}
          >
            <option value="">Tất cả</option>
            {filterConfig.cpu.map((cpu) => (
              <option key={cpu} value={cpu}>
                {cpu}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* --- RAM (gaming / office) --- */}
      {filterConfig.ram && (
        <div className="filter-group">
          <label>RAM:</label>
          <select
            value={filters.ram}
            onChange={(e) => updateFilter("ram", e.target.value)}
          >
            <option value="">Tất cả</option>
            {filterConfig.ram.map((ram) => (
              <option key={ram} value={ram}>
                {ram}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* --- Storage (macbook) --- */}
      {filterConfig.storage && (
        <div className="filter-group">
          <label>Dung lượng SSD:</label>
          <select
            value={filters.storage}
            onChange={(e) => updateFilter("storage", e.target.value)}
          >
            <option value="">Tất cả</option>
            {filterConfig.storage.map((storage) => (
              <option key={storage} value={storage}>
                {storage}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* --- Khoảng giá (có ở mọi danh mục) --- */}
      {filterConfig.price && (
        <div className="filter-group">
          <label>Khoảng giá:</label>
          <select
            value={filters.priceRange}
            onChange={(e) => updateFilter("priceRange", e.target.value)}
          >
            <option value="all">Tất cả</option>
            <option value="under-20">Dưới 20 triệu</option>
            <option value="20-40">20–40 triệu</option>
            <option value="over-40">Trên 40 triệu</option>
          </select>
        </div>
      )}

      {/* --- Sort giá (mọi danh mục) --- */}
      {filterConfig.sort && (
        <div className="filter-group">
          <label>Sắp xếp theo giá:</label>
          <select
            value={filters.sort}
            onChange={(e) => updateFilter("sort", e.target.value)}
          >
            <option value="default">Mặc định</option>
            <option value="asc">Tăng dần</option>
            <option value="desc">Giảm dần</option>
          </select>
        </div>
      )}
    </div>
  );
}