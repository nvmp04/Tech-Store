import React from 'react';
import ProductCard from './ProductCard';
import './Products.css'

const products = [ 
  { id: 1, 
    name: 'ASUS ROG Strix SCAR 18 G834JY', 
    price: 89990000, 
    oldPrice: 109990000, 
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop', specs: ['Intel Core i9-14900HX', 'RTX 4090 16GB', '64GB DDR5', '2T B PCIe 4.0 SSD'], 
    rating: 5, 
    reviews: 234, 
    badge: 'HOT', 
    discount: 18 
  }, 
  { 
    id: 2,
    name: 'MacBook Pro 16 M3 Max', price: 79990000, oldPrice: 89990000, 
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop', specs: ['Apple M3 Max', '48GB Unified Memory', '1TB SSD', 'Liquid Retina XDR'], 
    rating: 5, 
    reviews: 567, 
    badge: 'MỚI', 
    discount: 11
  }, 
  { 
    id: 3,
    name: 'MSI Titan 18 HX A14VIG', price: 119990000, oldPrice: 139990000, 
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=400&fit=crop', specs: ['Intel Core i9-14900HX', 'RTX 4090 16GB', '128GB DDR5', '4TB NVMe SSD'], 
    rating: 5, 
    reviews: 189, 
    badge: 'SALE', 
    discount: 14
  }, 
  { 
    id: 4,
    name: 'Dell XPS 17 9730', 
    price: 59990000, 
    oldPrice: 69990000, 
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop', specs: ['Intel Core i7-13700H', 'RTX 4070 8GB', '32GB DDR5', '1TB PCIe 4.0 SSD'], 
    rating: 4, 
    reviews: 423, 
    badge: '', 
    discount: 14
  }, 
  { 
    id: 5,
    name: 'Lenovo Legion Pro 7i Gen 9', 
    price: 54990000, 
    oldPrice: 64990000, 
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop', specs: ['Intel Core i9-14900HX', 'RTX 4080 12GB', '32GB DDR5', '1TB SSD'], 
    rating: 5, 
    reviews: 312, 
    badge: 'HOT', 
    discount: 15
  }, 
  { 
    id: 6,
    name: 'HP Omen 17-ck2000', 
    price: 44990000, 
    oldPrice: 52990000, 
    image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&h=400&fit=crop', specs: ['Intel Core i7-13700HX', 'RTX 4070 8GB', '16GB DDR5', '1TB NVMe'], 
    rating: 4, 
    reviews: 278, 
    badge: '', 
    discount: 15
  }, 
  { 
    id: 7,
    name: 'Razer Blade 16', 
    price: 94990000, oldPrice: 109990000, 
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop', specs: ['Intel Core i9-13950HX', 'RTX 4090 16GB', '32GB DDR5', '2TB SSD'], 
    rating: 5, 
    reviews: 156, 
    badge: 'SALE', 
    discount: 14
  }, 
  { 
    id: 8,
    name: 'Acer Predator Helios 18', 
    price: 69990000, 
    oldPrice: 79990000, 
    image: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?w=500&h=400&fit=crop', specs: ['Intel Core i9-13900HX', 'RTX 4080 12GB', '32GB DDR5', '2TB SSD'], 
    rating: 4, 
    reviews: 201, 
    badge: 'HOT', 
    discount: 13 
  } 
];

const ProductsSection = ({ setCart }) => {
  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">SẢN PHẨM NỔI BẬT</h2>
          <div className="filter-tabs">
            <button className="tab active">TẤT CẢ</button>
            <button className="tab">LAPTOP GAMING</button>
            <button className="tab">MACBOOK</button>
            <button className="tab">VĂN PHÒNG</button>
          </div>
        </div>

        <div className="grid grid-4">
          {products.map(p => (
            <ProductCard key={p.id} product={p} setCart={setCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
