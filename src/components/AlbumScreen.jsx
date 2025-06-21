import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ALPHABET_LIST, musicTypes } from "../utils/helper";
import girlImage from "../assets/images/png/girl-img.png";
import artistImage from "../assets/images/png/artist-img.png";

const Alphabets = () => {
    const [selectedLetter, setSelectedLetter] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [searchParams, setSearchParams] = useSearchParams();

    const handleChange = (letter) => {
        setSelectedLetter(letter);
        const newParams = new URLSearchParams(searchParams);
        newParams.set("letter", letter.toLowerCase());
        setSearchParams(newParams);
    };

    return (
        <div className="bg-[#f6f6f6] px-4 lg:py-6 py-10">
            <div className="container mx-auto max-w-[1140px]">
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 mb-8">
                    <div className="flex items-center w-max gap-6">
                        <div className="flex items-center gap-3">
                            {musicTypes.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedGenre(type)}
                                    className={`px-4 py-2 rounded-full text-sm ${selectedGenre === type
                                            ? "bg-gray-800 text-white font-medium"
                                            : "bg-black text-white hover:bg-gray-800"
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            {ALPHABET_LIST.map((item, index) => (
                                <span
                                    key={index}
                                    onClick={() => handleChange(item)}
                                    className={`cursor-pointer px-3 py-1 text-sm rounded-full ${selectedLetter === item
                                            ? "bg-black text-white font-medium"
                                            : "text-black hover:bg-gray-300"
                                        }`} > {item}
                                </span>))}
                        </div>
                    </div>
                </div>

                <div className="bg-[#14191C] mx-auto relative rounded-[22px] flex pl-12 pr-[43px] md:justify-between pt-[38px] mt-[35px] pb-[43px] max-sm:flex-wrap max-sm:pt-4 max-sm:pb-20">
                    <h1 className="text-5xl uppercase text-white font-bold max-lg:text-3xl max-sm:text-center max-sm:mx-auto">
                        HIT ME HARD AND SOFT{selectedGenre ? `  ${selectedGenre.toUpperCase()}` : ""}
                    </h1>
                    <div>
                        <div className="flex items-center gap-6 absolute lg:bottom-[-16%] bottom-[-9%] left-[4%]">
                            <img src={artistImage} alt="artist"
                                className="lg:size-[206px] md:size-[130px] size-[80px] rounded-full object-cover border-4 border-white mb-4 md:mb-0 pointer-events-none"/>
                            <div>
                                <h2 className="md:text-[32px] text-lg text-white md:leading-[42px] font-semibold mb-1">
                                    Billie Eilish{selectedLetter ? ` ${selectedLetter.toUpperCase()}` : ""}
                                </h2>
                                <p className="text-sm text-gray-300 max-md:pb-11">Released May 17, 2024</p>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <img src={girlImage} alt="album" className="lg:size-[261px] md:size-[200px] max-md:w-[260px] max-md:object-contain rounded-xl object-cover pointer-events-none"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alphabets;
