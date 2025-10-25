import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import FilterBar from "../components/FilterBar";
import ProductCard from "../../../components/Products/ProductCard";
import "../styles/ProductsPage.css";

export default function ProductsPage() {
  const { category } = useParams(); 
  console.log(category)
  const [sort, setSort] = useState("default");
  const [brandFilter, setBrandFilter] = useState([]); // multi-filter cho brand sau này

  // Mock data mẫu
  const products = [
    { id: 1, name: "ASUS ROG Strix SCAR 18", price: 89990000, oldPrice: 109990000, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500", specs: ["Intel Core i9-14900HX", "RTX 4090 16GB", "64GB DDR5"], rating: 5, category: "gaming", brand: "ASUS" },
    { id: 2, name: "MacBook Pro 16 M3 Max", price: 79990000, oldPrice: 89990000, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", specs: ["Apple M3 Max", "48GB Unified Memory", "1TB SSD"], rating: 5, category: "macbook", brand: "Apple" },
    { id: 3, name: "MSI Titan 18 HX", price: 119990000, oldPrice: 139990000, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500", specs: ["Intel Core i9", "RTX 4090 16GB", "128GB DDR5"], rating: 5, category: "gaming", brand: "MSI" },
    { id: 4, name: "Dell XPS 17", price: 59990000, oldPrice: 69990000, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500", specs: ["Intel Core i7", "RTX 4070", "32GB DDR5"], rating: 4, category: "office", brand: "Dell" },
    { id: 5, name: "Lenovo Legion Pro 7i", price: 54990000, oldPrice: 64990000, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500", specs: ["Intel Core i9", "RTX 4080", "32GB DDR5"], rating: 5, category: "gaming", brand: "Lenovo" },
  ];

  // Lọc theo category trong URL
  const filteredByCategory = useMemo(
    () => products.filter((p) => !category || p.category === category),
    [category]
  );

  // Lọc thêm theo brand (nếu có)
  const filtered = useMemo(() => {
    if (brandFilter.length === 0) return filteredByCategory;
    return filteredByCategory.filter((p) => brandFilter.includes(p.brand));
  }, [filteredByCategory, brandFilter]);

  // Sắp xếp theo giá
  const sorted = useMemo(() => {
    const sortedList = [...filtered];
    if (sort === "price-asc") sortedList.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sortedList.sort((a, b) => b.price - a.price);
    return sortedList;
  }, [filtered, sort]);

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

        <div className="products-controls">
          <FilterBar
            category={category}
            onBrandChange={setBrandFilter}
            onSortChange={setSort}
          />
        </div>

        <div className="grid grid-4 mt-3">
          {sorted.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {sorted.length === 0 && (
          <p className="text-center mt-4">Không có sản phẩm nào.</p>
        )}
      </div>
    </div>
  );
}
