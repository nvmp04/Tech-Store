import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './styles/BannerCarousel.css'
const banners = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop",
    title: "Lenovo Ideapad 2025",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop",
    title: "Macbook Pro M3 Max 2025",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop",
    title: "Asus ROG Strix 18 Gaming",
  },
];

const BannerCarousel = () => {
  return (
    <div className="banner-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        spaceBetween={10}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              src={banner.image}
              alt={banner.title}
              className="banner-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
