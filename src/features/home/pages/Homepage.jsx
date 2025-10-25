import BannerSection from '../../../components/Banner/BannerSection'
import FeaturesSection from '../../../components/Features/FeaturesSection';
import ProductsSection from '../../../components/Products/ProductsSection';
const Homepage = () => {
  return (
    <div className="homepage">
      <BannerSection/>
      <ProductsSection/>
      <FeaturesSection />
    </div>
  );
};

export default Homepage;
