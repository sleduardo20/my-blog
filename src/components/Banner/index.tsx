import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
} from "swiper";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
]);

export const Banner = () => {
  return (
    <Swiper
      // loop
      // centeredSlides
      // slidesPerView={1}
      // spaceBetween={30}
      effect="fade"
      // pagination={{ clickable: true }}
      navigation
      // autoplay={{
      //   delay: 4500,
      //   disableOnInteraction: false,
      // }}
    >
      <SwiperSlide
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1611095973512-45224aae1990?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
        }}
      />

      <SwiperSlide
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1516977103673-45be7d2850d6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
        }}
      />

      <SwiperSlide
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1617558541906-6512230bb94f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
        }}
      />
    </Swiper>
  );
};
