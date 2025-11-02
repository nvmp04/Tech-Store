import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import FilterBar from "../components/FilterBar";
import ProductCard from "../../../components/Products/ProductCard";
import "../styles/ProductsPage.css";

export default function ProductsPage() {
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

  const products = [
    {
      id: 1,
      name: "ASUS ROG Strix SCAR 18",
      price: 89990000,
      oldPrice: 109990000,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
      rating: 5,
      category: "gaming",
      brand: "ASUS",
      cpu: "Intel Core i9-14900HX",
      gpu: "RTX 4090",
      ram: "64GB",
      storage: "2TB SSD",
    },
    {
      id: 2,
      name: "MacBook Pro 16 M3 Max",
      price: 79990000,
      oldPrice: 89990000,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
      rating: 5,
      category: "macbook",
      brand: "Apple",
      cpu: "M3 Max",
      gpu: "Apple GPU 40-core",
      ram: "48GB",
      storage: "1TB SSD",
    },
    {
      id: 3,
      name: "MSI Titan 18 HX",
      price: 119990000,
      oldPrice: 139990000,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
      rating: 5,
      category: "gaming",
      brand: "MSI",
      cpu: "Intel Core i9-14900HX",
      gpu: "RTX 4090",
      ram: "128GB",
      storage: "2TB SSD",
    },
    {
      id: 4,
      name: "Dell XPS 17",
      price: 59990000,
      oldPrice: 69990000,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
      rating: 4,
      category: "office",
      brand: "Dell",
      cpu: "Intel Core i7-13700H",
      gpu: "RTX 4070",
      ram: "32GB",
      storage: "1TB SSD",
    },
    {
      id: 5,
      name: "Lenovo Legion Pro 7i",
      price: 54990000,
      oldPrice: 64990000,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      rating: 5,
      category: "gaming",
      brand: "Lenovo",
      cpu: "Intel Core i9-13900HX",
      gpu: "RTX 4080",
      ram: "32GB",
      storage: "1TB SSD",
    },
  ];

  // ✅ Lọc theo category trong URL
  const filteredByCategory = useMemo(() => {
    return products.filter((p) => !category || p.category === category);
  }, [category]);

  // ✅ Lọc theo các bộ lọc trong FilterBar
  const filteredProducts = useMemo(() => {
    return filteredByCategory.filter((p) => {
      if (filters.brand && p.brand !== filters.brand) return false;
      if (filters.cpu && !p.cpu.includes(filters.cpu)) return false;
      if (filters.gpu && !p.gpu.includes(filters.gpu)) return false;
      if (filters.ram && !p.ram.includes(filters.ram)) return false;
      if (filters.storage && !p.storage.includes(filters.storage)) return false;

      // Lọc theo khoảng giá
      if (filters.priceRange === "under-20" && p.price >= 20000000) return false;
      if (filters.priceRange === "20-40" && (p.price < 20000000 || p.price > 40000000)) return false;
      if (filters.priceRange === "over-40" && p.price <= 40000000) return false;

      return true;
    });
  }, [filteredByCategory, filters]);

  // ✅ Sắp xếp theo giá
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (filters.sort === "asc") sorted.sort((a, b) => a.price - b.price);
    if (filters.sort === "desc") sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [filteredProducts, filters.sort]);

  // ✅ Giao diện
  return (
    <div className="products-section">
      <div className="container">
        <h2 className="section-title">
          {category === "gaming"
            ? "Laptop Gaming"
            : category === "macbook"
            ? "MacBook"
            : category === "office"
            ? "Laptop Văn phòng"
            : "Tất cả sản phẩm"}
        </h2>

        {/* Thanh bộ lọc */}
        <div className="products-controls">
          <FilterBar onFilterChange={setFilters} />
        </div>

        {/* Danh sách sản phẩm */}
        <div className="grid grid-4 mt-3">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p className="text-center mt-4">Không có sản phẩm nào phù hợp.</p>
          )}
        </div>
      </div>
    </div>
  );
}
