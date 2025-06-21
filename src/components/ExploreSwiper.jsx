import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { slides } from "../utils/helper";
import leftArrow from '../assets/images/svg/left-arrow.svg';
import rightArrow from '../assets/images/svg/right-arrow.svg';


const ExploreSwiper = () => {
    const swiperRef = useRef(null);
    const [current, setCurrent] = useState(0);

    const getSideSlides = (index) => [
        slides[(index + 1) % slides.length],
        slides[(index + 2) % slides.length],
    ];

    return (
        <div className="mx-w-[1920px] min-h-[802px] w-full bg-[#0b1743] flex items-center xl:pl-29 lg:pl-5 max-lg:py-10 overflow-hidden slider-bg">
            <div className="lg:flex w-full max-w-[1440px] mx-auto justify-between xl:gap-[47px] lg:gap-4 relative">
                <div className="text-white lg:max-w-[500px] max-lg:text-center">
                    <h2 className="oswald-heading text-[36px] md:text-[48px] lg:max-w-[403px]">
                        Your world is the game board, and your mind is at stake.
                    </h2>
                    <p className="pt-4 text-lg max-lg:mb-18">
                        At the heart of Ingress is a desire to bring people together through exploration and teamwork.
                    </p>
                </div>
                <div className="flex flex-col lg:items-start items-center">
                    <div className="flex lg:flex-row flex-col lg:items-center items-center md:gap-y-6 gap-3">
                        <div className="relative xl:w-[330px] lg:w-[265px] lg:h-[310px] md:w-[350px] w-[320px] h-[320px] md:h-[350px] xl:h-[457px] overflow-hidden">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                loop={true}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                                modules={[Navigation]}
                                onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                className="w-full h-full"
                            >
                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index} className="w-full h-full">
                                        <img
                                            src={slide}
                                            alt={`Slide ${index}`}
                                            className="w-full h-full object-cover"
                                            draggable={false}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="flex flex-row items-center lg:gap-3 md:gap-5 gap-4">
                            {getSideSlides(current).map((slide, i) => (
                                <img
                                    key={i}
                                    src={slide}
                                    alt={`Slide ${i + 1}`}
                                    className="xl:size-[210px] size-[150px] object-cover opacity-70 transition-all duration-300 ease-in-out transform hover:scale-[1.03]"
                                    draggable={false}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='absolute xl:right-[22.5%] xl:top-[84%] lg:top-[78%] md:top-[28%] top-[33%] lg:right-[10%]'>
                        <button onClick={() => swiperRef.current?.slidePrev()} className="focus:outline-none cursor-pointer mx-4">
                            <img src={leftArrow} alt="leftArrow" className="transition-transform duration-200 hover:scale-110 h-[25px] w-[25px]"/>
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()} className="focus:outline-none cursor-pointer mx-4">
                            <img src={rightArrow} alt="rightArrow" className="transition-transform duration-200 hover:scale-110 h-[25px] w-[25px]"/>
                        </button>
                    </div>
                    <div className="flex flex-row items-center max-lg:justify-center mt-8 w-full">
                        <span className="text-white text-lg">Explore the World Around You</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreSwiper;
