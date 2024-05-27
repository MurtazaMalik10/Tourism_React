import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SetSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{marginTop: "3%"}}
      >
        <SwiperSlide>
          <img
            style={{
              width: "92%",
              height: "500px", // Fixed height
              objectFit: "cover", // Ensures image covers the area and is cropped if necessary
              borderRadius: "5px"
            }}
            src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*sy90CtyE2Lt6uv0lEnaNKw.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              width: "92%",
              height: "500px", // Fixed height
              objectFit: "cover", // Ensures image covers the area and is cropped if necessary
              borderRadius: "5px"
            }}
            src="https://invest.gov.pk/sites/default/files/2021-01/image_2021_01_22T06_57_50_866Z.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}