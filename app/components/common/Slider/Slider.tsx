"use client";
import React, { useState } from "react";
import styles from "./Slider.module.css";

export default function HomeSlider() {
  const [sliderState, setSliderState] = useState(false);

  const updateSlider = () => {
    setSliderState(!sliderState);
  };

  const handleClick = (e: any) => {
    updateSlider();
  };

  return (
    <>
      <div
        className="relative pb-10"
        data-te-carousel-init
        data-te-carousel-slide
      >
        {/* <!--Carousel indicators--> */}
        <div
          className="absolute bottom-6 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          <button
            type="button"
            aria-label="Slide 1"
            onClick={handleClick}
            disabled={!sliderState}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial ${
              sliderState ? "" : "cursor-default"
            } border-0 border-y-[10px] border-solid border-transparent ${
              sliderState ? " bg-slate-300" : "bg-slate-600"
            } bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
          ></button>
          <button
            type="button"
            aria-label="Slide 2"
            onClick={handleClick}
            disabled={sliderState}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial ${
              sliderState ? "cursor-default" : ""
            } border-0 border-y-[10px] 
          border-solid border-transparent ${
            sliderState ? "bg-slate-600" : "bg-slate-300"
          } bg-clip-padding p-0 
            -indent-[999px]  transition-opacity duration-[600ms] 
            ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
          ></button>
        </div>

        {/* <!--Carousel items--> */}
        <div className="relative whitespace-nowrap w-full md:w-5/6 md:mx-auto overflow-hidden after:clear-both after:block after:content-['']">
          {/* <!--First item--> */}
          <div
            className={`relative ${styles.img_container_transition} ${
              sliderState ? styles.ml_100 : ""
            } inline-block w-full overflow-hidden`}
            data-te-carousel-active
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0301/1991/9752/files/Janvier_2023_1000x.jpg?v=1675008354"
              className="block w-full"
              alt="slides"
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl hidden">First slide label</h5>
              <p className="hidden">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          {/* <!--Second item--> */}
          <div
            className={`relative ${styles.img_container_transition} inline-block w-full overflow-hidden`}
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0301/1991/9752/files/Image_JPEG-863DBC3EED2B-1_2_1000x.jpg?v=1669316208"
              className="block w-full"
              alt="slides"
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl hidden">Second slide label</h5>
              <p className="hidden">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
        </div>

        {/* <!--Carousel controls - prev item--> */}
        <button
          className="absolute bottom-12 left-0 top-0 z-[1] flex w-[10%] items-center justify-center border-0 bg-none p-0 text-center text-white  md:text-slate-400 opacity-60 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white md:hover:text-slate-500 hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline  focus:outline-none motion-reduce:transition-none"
          type="button"
          name="prev"
          onClick={handleClick}
        >
          <span className="inline-block h-14 w-14 hover:h-16 hover:w-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-14 w-14 hover:h-16 hover:w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/* <!--Carousel controls - next item--> */}
        <button
          className="absolute bottom-12 right-0 top-0 z-[1] flex w-[10%] items-center justify-center border-0 bg-none p-0 text-center text-white md:text-slate-400 opacity-60 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white md:hover:text-slate-500 hover:no-underline hover:opacity-100 hover:outline-none focus:no-underline focus:outline-none motion-reduce:transition-none"
          type="button"
          name="next"
          onClick={handleClick}
        >
          <span className="inline-block h-14 w-14 hover:h-16 hover:w-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-14 w-14 hover:h-16 hover:w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </>
  );
}
