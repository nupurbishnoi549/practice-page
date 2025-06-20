import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import sliderImg1 from '../assets/images/png/slider-img.png';
import sliderImg2 from '../assets/images/png/slider-img2.png';
import sliderImg3 from '../assets/images/png/slider-img3.png';

const ExploreSwiper = () => {
    const slides = [sliderImg1, sliderImg2, sliderImg3];

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center px-6 slider-bg">
            <div className="flex flex-wrap gap-10 items-center justify-center w-full">
                <div className="text-white max-w-[500px]">
                    <h2 className="oswald-heading text-[36px] md:text-[48px] leading-tight font-bold">
                        Your world is the game board, and your mind is at stake.
                    </h2>
                    <p className="pt-4 text-lg">
                        At the heart of Ingress is a desire to bring people together through exploration and teamwork.
                    </p>
                </div>

                <div className="w-full md:w-[652px] h-[457px]">
                    <Swiper
                        slidesPerView={3}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={30}
                        className="h-full custom-swiper"
                    >
                        {slides.map((img, idx) => (
                            <SwiperSlide key={idx} className="custom-slide">
                                <div className="w-full h-full">
                                    <img
                                        src={img}
                                        alt={`Slide ${idx + 1}`}
                                        className="w-full h-full rounded-xl object-cover transition-all duration-500 ease-in-out"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ExploreSwiper;
