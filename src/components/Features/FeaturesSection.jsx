import React from 'react';
import './Feature.css'
import { FaStar, FaHandsHelping, FaHeart } from "react-icons/fa";
const FeaturesSection = () => {
  const features = [
    { 
      icon: <FaStar size={24} color="#0b56a6" />, 
      title: 'Chất Lượng Cao & Giá Tốt Nhất', 
      desc: 'Đem đến những chiếc Laptop nhập khẩu cao cấp với chất lượng dịch vụ không ngừng được nâng cao.' 
    },
    { 
      icon: <FaHandsHelping size={24} color="#0b56a6" />, 
      title: 'Đồng Hành', 
      desc: 'Cung cấp dịch vụ bảo trì, bảo dưỡng tốt nhất với chi phí tối ưu cho toàn bộ khách hàng, luôn song hành cùng các bạn' 
    },
    { 
      icon: <FaHeart size={24} color="#0b56a6" />, 
      title: 'Thấu Hiểu & Tận Tâm', 
      desc: 'Thấu hiểu những mong ước, nỗi bận tâm của bạn, Tech Store sẽ đem lại trải nghiệm tốt nhất' 
    }
  ];
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
