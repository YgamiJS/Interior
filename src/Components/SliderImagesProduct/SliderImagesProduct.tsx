import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { IProduct } from "@/types/types";
import "./SliderImagesProduct.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { uuid } from "@/utils/utils";

interface IProps {
  product: IProduct;
}

export const SliderImagesProduct = ({ product }: IProps) => {
  return (
    <Swiper
      className="swiperProduct container"
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{ delay: 4000 }}
      navigation
      loop={true}
    >
      {product.slider.map((image) => (
        <SwiperSlide key={uuid()}>
          <img className="product__image" src={image} alt={product.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
