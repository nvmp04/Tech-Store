import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProvinces, getDistricts, getWards } from 'vietnam-provinces';
import '../styles/CheckoutPage.css';

export default function CheckoutPage() {
  const location = useLocation();
  const mockProduct = {
    name: 'Laptop ASUS ROG Strix G16',
    cpu: 'Intel Core i7-13650HX',
    ram: '16GB DDR5',
    gpu: 'NVIDIA RTX 4060 8GB',
    storage: '1TB SSD NVMe',
    price: 38990000,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500'
  };

  const { product = mockProduct } = location.state || {};
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    province: '',
    district: '',
    ward: '',
    address: '',
    couponCode: '',
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  useEffect(() => {
    setProvinces(getProvinces());
  }, []);

  useEffect(() => {
    if (formData.province) {
      const province = provinces.find(p => p.name === formData.province);
      if (province) {
        setDistricts(getDistricts(province.code));
        setWards([]);
        setFormData(prev => ({ ...prev, district: '', ward: '' }));
      }
    }
  }, [formData.province]);

  useEffect(() => {
    if (formData.district) {
      const district = districts.find(d => d.name === formData.district);
      if (district) {
        setWards(getWards(district.code));
        setFormData(prev => ({ ...prev, ward: '' }));
      }
    }
  }, [formData.district]);

  // Cập nhật input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(' Dữ liệu đơn hàng:', formData);
    alert('Đặt hàng thành công! (xem console log để xem dữ liệu gửi)');
  };

  const finalPrice = product?.price || 0;

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">Thanh toán</h1>
        
        <div className="checkout-grid">
          {/* Form thông tin */}
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <h2>Thông tin người nhận</h2>
                
                <div className="form-group">
                  <label htmlFor="fullName">Họ và tên*</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Số điện thoại*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Địa chỉ giao hàng */}
              <div className="form-section">
                <h2>Địa chỉ giao hàng</h2>

                <div className="form-group">
                  <label htmlFor="province">Tỉnh/Thành phố*</label>
                  <select
                    id="province"
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Chọn Tỉnh/Thành phố --</option>
                    {provinces.map(p => (
                      <option key={p.code} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="district">Quận/Huyện*</label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    required
                    disabled={!districts.length}
                  >
                    <option value="">-- Chọn Quận/Huyện --</option>
                    {districts.map(d => (
                      <option key={d.code} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="ward">Phường/Xã*</label>
                  <select
                    id="ward"
                    name="ward"
                    value={formData.ward}
                    onChange={handleInputChange}
                    required
                    disabled={!wards.length}
                  >
                    <option value="">-- Chọn Phường/Xã --</option>
                    {wards.map(w => (
                      <option key={w.code} value={w.name}>{w.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Địa chỉ chi tiết*</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Tóm tắt đơn hàng */}
          <div className="order-summary">
            <h2>Thông tin đơn hàng</h2>

            {/* Mã giảm giá */}
            <span className='price-row total'>Mã giảm giá</span>
            <div className="form-group">
            <input
                type="text"
                id="couponCode"
                name="couponCode"
                value={formData.couponCode}
                onChange={handleInputChange}
                placeholder="Nhập mã giảm giá (nếu có)"
            />
            </div>

            {product && (
              <div className="product-summary">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="specs">
                    CPU: {product.cpu}<br />
                    RAM: {product.ram}<br />
                    GPU: {product.gpu}<br />
                    Ổ cứng: {product.storage}
                  </p>
                </div>
              </div>
            )}

            <div className="price-summary">
              <div className="price-row">
                <span>Giá sản phẩm:</span>
                <span>{product.price.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="price-row">
                <span>Phí vận chuyển:</span>
                <span>Miễn phí</span>
              </div>
              <div className="price-row total">
                <span>Tổng cộng:</span>
                <span>{finalPrice.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>

            <button type="submit" className="checkout-button" onClick={handleSubmit}>
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
