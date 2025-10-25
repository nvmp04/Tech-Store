import React from "react";

export default function SortDropdown({ onSort }) {
  return (
    <div className="sort-dropdown">
      <label>Sắp xếp:</label>
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="default">Mặc định</option>
        <option value="price-asc">Giá tăng dần</option>
        <option value="price-desc">Giá giảm dần</option>
      </select>
    </div>
  );
}
