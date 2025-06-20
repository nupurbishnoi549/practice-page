import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import sliderImg1 from '../assets/images/png/slider-img.png';
import sliderImg2 from '../assets/images/png/slider-img2.png';
import sliderImg3 from '../assets/images/png/slider-img3.png';

const ExploreSwiper = () => {
  return (
      <div className="relative w-full min-h-screen flex items-center justify-center px-6 slider-bg">
          <div className="flex flex-wrap gap-10 items-center justify-center max-w-[1140px] w-full">
              <div className="text-white max-w-[500px]">
                  <h2 className="oswald-heading text-[36px] md:text-[48px] leading-tight font-bold">
                      Your world is the game board, and your mind is at stake.
                  </h2>
                  <p className="pt-4 text-lg">
                      At the heart of Ingress is a desire to bring people together through exploration and teamwork.
                  </p>
              </div>

              <div className="w-full md:w-[382px] h-[457px]">
                  <Swiper
                      slidesPerView={1}
                      spaceBetween={20}
                      loop={true}
                      className="h-full"
                  >
                      <SwiperSlide className="swiper-slide-custom">
                          <img
                              src={sliderImg1}
                              alt="Slide 1"
                              className="w-full h-full object-cover rounded-xl transition-all duration-500"
                          />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide-custom">
                          <img
                              src={sliderImg2}
                              alt="Slide 2"
                              className="w-full h-full object-cover rounded-xl transition-all duration-500"
                          />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide-custom">
                          <img
                              src={sliderImg3}
                              alt="Slide 3"
                              className="w-full h-full object-cover rounded-xl transition-all duration-500"
                          />
                      </SwiperSlide>
                  </Swiper>


              </div>
          </div>
      </div>
  )
}

export default ExploreSwiper

