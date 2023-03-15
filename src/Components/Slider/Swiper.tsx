import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";
import { IProduct } from "@/types/types";
import "./Swiper.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { ProductItem } from "../ProductItem/ProductItem";

interface Props {
  products: IProduct[];
}

export const Slider = ({ products }: Props) => {
  return (
    <Swiper
      className="container"
      modules={[Navigation, Autoplay]}
      slidesPerView={3}
      spaceBetween={20}
      breakpoints={{
        310: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1240: {
          slidesPerView: 3,
        },
        1650: {
          slidesPerView: 4,
        },
      }}
      autoplay={{ delay: 4000 }}
      navigation
      loop={true}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductItem product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
