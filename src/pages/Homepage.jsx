import React, { useState } from 'react';
import Header from '../components/Header/Header';
import BannerSection from '../components/Banner/BannerSection';
import FeaturesSection from '../components/Features/FeaturesSection';
import ProductsSection from '../components/Products/ProductsSection';
import Footer from '../components/Footer/Footer';

const Homepage = () => {
  const [cart, setCart] = useState(0);

  return (
    <div className="homepage">
      <Header cart={cart} />
      <BannerSection />
      <ProductsSection setCart={setCart} />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Homepage;
