import { Link } from "react-router-dom";

const formatPrice = (price) =>
  new Intl.NumberFormat("vi-VN").format(price) + "₫";

function ProductCard({ product, setCart }) {
  // Tính phần trăm giảm giá (nếu có)
  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 0;

  return (
    <div className="product-card">
      {/* Badge hoặc nhãn giảm giá */}
      {product.badge && (
        <span className={`product-badge ${product.badge.toLowerCase()}`}>
          {product.badge}
        </span>
      )}
      {discount > 0 && (
        <span className="discount-badge">-{discount}%</span>
      )}

      {/* Hình ảnh + overlay */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <Link to={`/product/${product.id}`} className="btn-quick-view">
            XEM SẢN PHẨM
          </Link>
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">Thương hiệu: {product.brand}</p>

        {/* Cấu hình cơ bản */}
        <div className="product-specs">
          {product.cpu && <span className="spec-item">{product.cpu}</span>}
          {product.gpu && <span className="spec-item">{product.gpu}</span>}
          {product.ram && <span className="spec-item">{product.ram}</span>}
          {product.storage && (
            <span className="spec-item">{product.storage}</span>
          )}
        </div>

        {/* Đánh giá sao */}
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < product.rating ? "star filled" : "star"}
              >
                ★
              </span>
            ))}
          </div>
          <span className="reviews">
            ({product.reviews || 12} đánh giá)
          </span>
        </div>

        {/* Giá sản phẩm */}
        <div className="product-price">
          <span className="price-current">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="price-old">{formatPrice(product.oldPrice)}</span>
          )}
        </div>

        {/* Nút thêm vào giỏ hàng */}
        {setCart && (
          <button
            className="btn-add-cart"
            onClick={() => setCart((prev) => prev + 1)}
          >
            THÊM VÀO GIỎ HÀNG
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
