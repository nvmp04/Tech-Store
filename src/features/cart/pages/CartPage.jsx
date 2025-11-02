import React, { useState } from 'react';
import '../styles/CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Dell XPS 13 9310 - Intel Core i7-1165G7',
      price: 32990000,
      quantity: 1,
      image: 'https://placehold.co/150x150/e2e8f0/475569?text=Dell+XPS',
      inStock: true,
      specs: 'i7-1165G7 | 16GB RAM | 512GB SSD'
    },
    {
      id: 2,
      name: 'MSI Gaming GF63 Thin 11SC',
      price: 18990000,
      quantity: 2,
      image: 'https://placehold.co/150x150/e2e8f0/475569?text=MSI+GF63',
      inStock: true,
      specs: 'i5-11400H | 8GB RAM | GTX 1650'
    },
    {
      id: 3,
      name: 'MacBook Air M2 2024',
      price: 28990000,
      quantity: 1,
      image: 'https://placehold.co/150x150/e2e8f0/475569?text=MacBook',
      inStock: false,
      specs: 'Apple M2 | 8GB | 256GB SSD'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      setCartItems(cartItems.filter(item => item.id !== id));
    }
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setAppliedCoupon({ code: 'SAVE10', discount: 0.1, label: '10%' });
      alert('Mã giảm giá đã được áp dụng!');
    } else if (couponCode.toUpperCase() === 'FREESHIP') {
      setAppliedCoupon({ code: 'FREESHIP', discount: 0, label: 'Miễn phí ship', freeShip: true });
      alert('Mã freeship đã được áp dụng!');
    } else {
      alert('Mã giảm giá không hợp lệ!');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedCoupon ? subtotal * (appliedCoupon.discount || 0) : 0;
  const shippingFee = appliedCoupon?.freeShip ? 0 : 30000;
  const total = subtotal - discount + shippingFee;

  const availableItems = cartItems.filter(item => item.inStock);
  const unavailableItems = cartItems.filter(item => !item.inStock);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-content">
          <div className="empty-icon">🛒</div>
          <h2 className="empty-title">GIỎ HÀNG TRỐNG</h2>
          <p className="empty-text">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
          <button className="btn-continue-shopping">TIẾP TỤC MUA SẮM</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="page-title">GIỎ HÀNG CỦA BẠN</h1>
        
        <div className="cart-layout">
          <div className="cart-items">
            {availableItems.length > 0 && (
              <div className="items-section">
                <div className="section-header">
                  <h3 className="section-title">SẢN PHẨM CÓ SẴN ({availableItems.length})</h3>
                </div>

                {availableItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} className="product-image" />
                    </div>

                    <div className="item-info">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-specs">{item.specs}</p>
                      <div className="item-price">{formatPrice(item.price)}</div>
                    </div>

                    <div className="item-actions">
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                        <input type="number" value={item.quantity} readOnly />
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>

                      <div className="item-total">{formatPrice(item.price * item.quantity)}</div>

                      <button className="btn-remove" onClick={() => removeItem(item.id)}>XÓA</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {unavailableItems.length > 0 && (
              <div className="items-section">
                <div className="section-header">
                  <h3 className="section-title">SẢN PHẨM HẾT HÀNG ({unavailableItems.length})</h3>
                </div>

                {unavailableItems.map(item => (
                  <div key={item.id} className="cart-item unavailable">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} className="product-image out" />
                      <div className="out-of-stock-badge">HẾT HÀNG</div>
                    </div>

                    <div className="item-info">
                      <h4 className="item-name out">{item.name}</h4>
                      <p className="item-specs">{item.specs}</p>
                      <div className="item-price out">{formatPrice(item.price)}</div>
                    </div>

                    <div className="item-actions">
                      <button className="btn-remove danger" onClick={() => removeItem(item.id)}>XÓA</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="cart-footer">
              <button className="btn-clear" onClick={() => {
                if (window.confirm('Xóa tất cả sản phẩm?')) setCartItems([]);
              }}>XÓA TẤT CẢ</button>
              <button className="btn-continue">TIẾP TỤC MUA SẮM</button>
            </div>
          </div>

          <div className="order-summary">
            <h3 className="summary-title">TỔNG ĐƠN HÀNG</h3>

            <div className="summary-content">
              <div className="coupon-section">
                <label>MÃ GIẢM GIÁ</label>
                <div className="coupon-input">
                  <input 
                    type="text"
                    placeholder="Nhập mã giảm giá"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button onClick={applyCoupon}>ÁP DỤNG</button>
                </div>
                {appliedCoupon && (
                  <div className="applied-coupon">
                    ✓ {appliedCoupon.code} ({appliedCoupon.label})
                    <button onClick={() => setAppliedCoupon(null)}>×</button>
                  </div>
                )}
              </div>

              <div className="summary-details">
                <div className="summary-row">
                  <span>Tạm tính:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                {discount > 0 && (
                  <div className="summary-row discount">
                    <span>Giảm giá:</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}

                <div className="summary-row">
                  <span>Phí vận chuyển:</span>
                  <span className={appliedCoupon?.freeShip ? 'strikethrough' : ''}>
                    {formatPrice(30000)}
                  </span>
                </div>

                {appliedCoupon?.freeShip && (
                  <div className="summary-row freeship">
                    <span>Miễn phí vận chuyển:</span>
                    <span>-{formatPrice(30000)}</span>
                  </div>
                )}

                <div className="divider"></div>

                <div className="summary-total">
                  <span>TỔNG CỘNG:</span>
                  <span className="total-amount">{formatPrice(total)}</span>
                </div>
              </div>

              <button className="btn-checkout" disabled={availableItems.length === 0}>
                TIẾN HÀNH ĐẶT HÀNG
              </button>

              {unavailableItems.length > 0 && (
                <p className="checkout-note">* Sản phẩm hết hàng sẽ không được tính vào đơn hàng</p>
              )}
            </div>

            <div className="trust-badges">
              <div>✓ Miễn phí vận chuyển</div>
              <div>✓ Đổi trả trong 7 ngày</div>
              <div>✓ Bảo hành chính hãng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
