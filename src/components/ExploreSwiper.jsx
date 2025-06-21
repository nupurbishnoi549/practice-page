import React, { useState } from 'react';
import sliderImg1 from '../assets/images/png/slider-img.png';
import sliderImg2 from '../assets/images/png/slider-img2.png';
import sliderImg3 from '../assets/images/png/slider-img3.png';
import leftArrow from '../assets/images/svg/left-arrow.svg';
import rightArrow from '../assets/images/svg/right-arrow.svg';

const slides = [sliderImg1, sliderImg2, sliderImg3];

const ExploreSwiper = () => {
    const [current, setCurrent] = useState(0);

    const getSlides = () => {
        const a = slides[current % slides.length];
        const b = slides[(current + 1) % slides.length];
        const c = slides[(current + 2) % slides.length];
        return [a, b, c];
    };

    const handlePrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);

    const [big, small1, small2] = getSlides();

    return (
        <div className="mx-w-[1920px] min-h-[802px] w-full bg-[#0b1743] flex items-center xl:pl-29 lg:pl-5 max-lg:py-10 overflow-hidden slider-bg">
            <div className="lg:flex w-full max-w-[1440px] mx-auto justify-between xl:gap-[47px] lg:gap-4 relative">
                <div className="text-white lg:max-w-[500px] max-lg:text-center">
                    <h2 className="oswald-heading text-[36px] md:text-[48px]">
                        Your world is the game board, and your mind is at stake.
                    </h2>
                    <p className="pt-4 text-lg max-lg:mb-18">
                        At the heart of Ingress is a desire to bring people together through exploration and teamwork.
                    </p>
                </div>
                <div className="flex flex-col lg:items-start items-center">
                    <div className="flex lg:flex-row flex-col  lg:items-center items-center md:gap-y-6 gap-3">
                        <img
                            src={big}
                            alt="Main Slide"
                            className={`xl:w-[330px] lg:w-[265px] lg:h-[310px] md:w-[350px] w-[320px] h-[320px] md:h-[350px] xl:h-[457px]
                object-cover transition-all duration-700 ease-in-out transform scale-100 opacity-100`}
                            draggable={false}
                        />

                        <div className="flex flex-row items-center lg:gap-3 md:gap-5 gap-4 transition-all duration-700 ease-in-out">
                            <img
                                src={small1}
                                alt="Slide 2"
                                className={`xl:size-[210px] size-[150px] object-cover opacity-70
                    transition-all duration-700 ease-in-out transform hover:scale-[1.03]`}
                                draggable={false}
                            />
                            <img
                                src={small2}
                                alt="Slide 3"
                                className={`xl:size-[210px] size-[150px] object-cover opacity-70
                    transition-all duration-700 ease-in-out transform hover:scale-[1.03]`}
                                draggable={false}
                            />
                        </div>

                    </div>

                    <div className='absolute xl:right-[22.5%]  xl:top-[84%] lg:top-[78%] md:top-[28%] top-[34%] lg:right-[10%] '>
                        <button onClick={handlePrev} className="focus:outline-none cursor-pointer mx-4">
                            <img src={leftArrow} alt="leftArrow" className='' />
                        </button>
                        <button onClick={handleNext} className="focus:outline-none cursor-pointer mx-4 ">
                            <img src={rightArrow} alt="rightArrow" />
                        </button>
                    </div>
                    <div className="flex flex-row items-center max-lg:justify-center mt-8 w-full">
                        <span className="text-white text-lg">
                            Explore the World Around You
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreSwiper;
