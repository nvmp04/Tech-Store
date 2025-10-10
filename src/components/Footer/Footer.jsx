import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <p>Hệ thống bán lẻ laptop nhập khẩu uy tín hàng đầu Việt Nam với hơn 15 cửa hàng trên toàn quốc.</p>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Youtube</a>
              <a href="#">Instagram</a>
              <a href="#">Tiktok</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>CHÍNH SÁCH</h3>
            <ul>
              <li><a href="#">Chính sách bảo hành</a></li>
              <li><a href="#">Chính sách đổi trả</a></li>
              <li><a href="#">Chính sách vận chuyển</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>HỖ TRỢ KHÁCH HÀNG</h3>
            <ul>
              <li><a href="#">Hướng dẫn mua hàng</a></li>
              <li><a href="#">Hướng dẫn thanh toán</a></li>
              <li><a href="#">Tra cứu đơn hàng</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
              <li><a href="#">Liên hệ hỗ trợ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>LIÊN HỆ</h3>
            <ul className="contact-info">
              <li><strong>Địa chỉ:</strong> 123 Nguyễn Huệ, Q.1, TP.HCM</li>
              <li><strong>Hotline:</strong> 0909.123.456</li>
              <li><strong>Email:</strong> radom@gmail.com</li>
              <li><strong>Giờ làm việc:</strong> 8:00 - 22:00 (T2-CN)</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Hệ thống bán lẻ laptop nhập khẩu chính hãng</p>
          <p>GPKD số 0123456789 do Sở KH&ĐT TP.HCM cấp ngày 01/01/2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
