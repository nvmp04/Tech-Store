import React from "react";
import CategorySidebar from "./CategorySidebar";
import BannerCarousel from "./BannerCarousel";
import './styles/BannerSection.css'
const BannerSection = () => {
  return (
    <section className="home-banner-section">
      <div className="banner-layout">
        <div className="banner-left">
          <CategorySidebar />
        </div>
        <div className="banner-right">
          <BannerCarousel />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
