import React from 'react';

const formatPrice = (price) => new Intl.NumberFormat('vi-VN').format(price) + '₫';

const ProductCard = ({ product, setCart }) => (
  <div className="product-card">
    {product.badge && <span className={`product-badge ${product.badge.toLowerCase()}`}>{product.badge}</span>}
    {product.discount > 0 && <span className="discount-badge">-{product.discount}%</span>}

    <div className="product-image">
      <img src={product.image} alt={product.name} />
      <div className="product-overlay">
        <button className="btn-quick-view">XEM NHANH</button>
      </div>
    </div>

    <div className="product-info">
      <h3 className="product-name">{product.name}</h3>

      <div className="product-specs">
        {product.specs.map((spec, idx) => (
          <span key={idx} className="spec-item">{spec}</span>
        ))}
      </div>

      <div className="product-rating">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < product.rating ? 'star filled' : 'star'}>★</span>
          ))}
        </div>
        <span className="reviews">({product.reviews} đánh giá)</span>
      </div>

      <div className="product-price">
        <span className="price-current">{formatPrice(product.price)}</span>
        {product.oldPrice && <span className="price-old">{formatPrice(product.oldPrice)}</span>}
      </div>

      <button className="btn-add-cart" onClick={() => setCart(prev => prev + 1)}>
        THÊM VÀO GIỎ HÀNG
      </button>
    </div>
  </div>
);

export default ProductCard;
