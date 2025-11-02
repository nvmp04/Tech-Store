import React, { useState } from 'react';
import '../styles/ProductDetailPage.css'; 
import { useNavigate } from 'react-router-dom';

const ProductDetailPage = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const navigate = useNavigate();
  const product = {
    id: 1,
    name: 'Dell XPS 13 9310 - Intel Core i7-1165G7',
    price: 32990000,
    oldPrice: 38990000,
    badge: 'HOT',
    rating: 4.5,
    reviews: 156,
    inStock: true,
    images: [
      'https://placehold.co/600x450/e2e8f0/475569?text=Dell+XPS+1',
      'https://placehold.co/600x450/e2e8f0/475569?text=Dell+XPS+2',
      'https://placehold.co/600x450/e2e8f0/475569?text=Dell+XPS+3',
      'https://placehold.co/600x450/e2e8f0/475569?text=Dell+XPS+4'
    ],
    specs: {
      cpu: 'Intel Core i7-1165G7',
      ram: '16GB DDR4',
      storage: '512GB SSD NVMe',
      display: '13.4" FHD+ (1920x1200)',
      gpu: 'Intel Iris Xe Graphics',
      os: 'Windows 11 Home'
    },
    description: 'Dell XPS 13 là dòng laptop cao cấp với thiết kế siêu mỏng nhẹ, hiệu năng mạnh mẽ và màn hình viền siêu mỏng InfinityEdge. Phù hợp cho doanh nhân, sinh viên và người dùng chuyên nghiệp.',
  };

  const reviews = [
    {
      id: 1,
      userName: 'Nguyễn Văn A',
      rating: 5,
      date: '15/10/2024',
      verified: true,
      comment: 'Sản phẩm rất tốt, đúng như mô tả. Giao hàng nhanh, đóng gói cẩn thận. Laptop chạy mượt, cấu hình mạnh mẽ.',
      helpful: 24
    },
    {
      id: 2,
      userName: 'Trần Thị B',
      rating: 4,
      date: '10/10/2024',
      verified: true,
      comment: 'Máy đẹp, hiệu năng ổn. Tuy nhiên giá hơi cao so với cấu hình. Nhìn chung vẫn đáng mua.',
      helpful: 12
    },
    {
      id: 3,
      userName: 'Lê Văn C',
      rating: 5,
      date: '05/10/2024',
      verified: false,
      comment: 'Laptop chất lượng, phục vụ tốt nhu cầu làm việc và giải trí. Màn hình đẹp, bàn phím gõ êm.',
      helpful: 8
    }
  ];

  const reviewStats = {
    average: 4.5,
    total: 156,
    distribution: { 5: 89, 4: 42, 3: 18, 2: 5, 1: 2 }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log({ rating, reviewText });
    alert('Đánh giá của bạn đã được gửi!');
    setRating(0);
    setReviewText('');
  };

  return (
    <div className="page">
      <div className="container">
        {/* Product Main Section */}
        <div className="product-main">
          {/* Image Gallery */}
          <div className="image-section">
            {product.badge && <div className="badge">{product.badge}</div>}
            <div className="main-image-wrapper">
              <img src={product.images[mainImage]} alt={product.name} className="main-image" />
            </div>
            <div className="thumbnails">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className="thumbnail"
                  style={{ border: mainImage === idx ? '2px solid #1a56db' : '2px solid #e5e7eb' }}
                  onClick={() => setMainImage(idx)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>

            <div className="rating-section">
              <div className="stars">
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} style={{ fontSize: '1.1rem', color: star <= product.rating ? '#fbbf24' : '#d1d5db' }}>★</span>
                ))}
              </div>
              <span className="review-count">({product.reviews} đánh giá)</span>
            </div>

            <div className="price-section">
              <div className="price">{formatPrice(product.price)}</div>
              {product.oldPrice && (
                <>
                  <div className="old-price">{formatPrice(product.oldPrice)}</div>
                  <div className="discount">-{Math.round((1 - product.price / product.oldPrice) * 100)}%</div>
                </>
              )}
            </div>

            <div className="specs-box">
              <h3 className="specs-title">THÔNG SỐ KỸ THUẬT</h3>
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="spec-row">
                  <span className="spec-label">{key.toUpperCase()}:</span>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="stock-status">
              {product.inStock ? (
                <span className="in-stock">✓ Còn hàng</span>
              ) : (
                <span className="out-of-stock">✗ Hết hàng</span>
              )}
            </div>

            <div className="quantity-section">
              <label className="quantity-label">SỐ LƯỢNG:</label>
              <div className="quantity-control">
                <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <input type="number" value={quantity} readOnly className="qty-input" />
                <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="actions">
              <button className="btn-add-cart">THÊM VÀO GIỎ HÀNG</button>
              <button onClick={()=>navigate('/checkout')} className="btn-buy-now">MUA NGAY</button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="tabs-section">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'description' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              MÔ TẢ
            </button>
            <button
              className={`tab ${activeTab === 'specs' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              THÔNG SỐ
            </button>
            <button
              className={`tab ${activeTab === 'reviews' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              ĐÁNH GIÁ ({product.reviews})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description">
                <h3 className="content-title">MÔ TẢ SẢN PHẨM</h3>
                <p>{product.description}</p>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="specs-detail">
                <h3 className="content-title">THÔNG SỐ CHI TIẾT</h3>
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key}>
                        <td className="spec-table-label">{key.toUpperCase()}</td>
                        <td className="spec-table-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-section">
                {/* Review Overview */}
                <div className="review-overview">
                  <div className="overview-left">
                    <div className="avg-rating">{reviewStats.average}</div>
                    <div className="stars">
                      {[1, 2, 3, 4, 5].map(star => (
                        <span key={star} style={{ fontSize: '1.2rem', color: star <= reviewStats.average ? '#fbbf24' : '#d1d5db' }}>★</span>
                      ))}
                    </div>
                    <div className="total-reviews">{reviewStats.total} đánh giá</div>
                  </div>

                  <div className="overview-right">
                    {[5, 4, 3, 2, 1].map(star => {
                      const count = reviewStats.distribution[star];
                      const percentage = (count / reviewStats.total) * 100;
                      return (
                        <div key={star} className="rating-row">
                          <span className="rating-label">{star} ★</span>
                          <div className="rating-bar">
                            <div className="rating-fill" style={{ width: `${percentage}%` }}></div>
                          </div>
                          <span className="rating-count">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Write Review */}
                <div className="write-review">
                  <h3 className="review-form-title">VIẾT ĐÁNH GIÁ</h3>
                  <form onSubmit={handleSubmitReview}>
                    <div className="form-group">
                      <label className="form-label">ĐÁNH GIÁ *</label>
                      <div className="star-rating">
                        {[1, 2, 3, 4, 5].map(star => (
                          <span
                            key={star}
                            style={{
                              fontSize: '2rem',
                              cursor: 'pointer',
                              color: star <= (hoverRating || rating) ? '#fbbf24' : '#d1d5db',
                              transition: 'color 0.2s'
                            }}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setRating(star)}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">NHẬN XÉT *</label>
                      <textarea
                        className="textarea"
                        rows="4"
                        placeholder="Chia sẻ trải nghiệm của bạn..."
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="submit-btn" disabled={rating === 0}>
                      GỬI ĐÁNH GIÁ
                    </button>
                  </form>
                </div>

                {/* Reviews List */}
                <div className="reviews-list">
                  {reviews.map(review => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <div className="review-user">
                          <div className="user-avatar">{review.userName.charAt(0)}</div>
                          <div>
                            <div className="user-name">
                              {review.userName}
                              {review.verified && <span className="verified-badge">✓ Đã mua hàng</span>}
                            </div>
                            <div className="review-date">{review.date}</div>
                          </div>
                        </div>
                        <div className="review-stars">
                          {[1, 2, 3, 4, 5].map(star => (
                            <span key={star} style={{ color: star <= review.rating ? '#fbbf24' : '#d1d5db' }}>★</span>
                          ))}
                        </div>
                      </div>
                      <p className="review-comment">{review.comment}</p>
                      <button className="helpful-btn">Hữu ích ({review.helpful})</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
