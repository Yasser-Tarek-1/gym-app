import { Box } from "@mui/material";
import React from "react";
import ScroolBarCard from "./ScroolBarCard";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const ScroolBar = ({ data }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 640px
          600: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          900: {
            slidesPerView: 3,
          },
          // when window width is >= 1280
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id || item}>
              <Box key={item.id || item} mx="30px">
                <ScroolBarCard item={item} />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default ScroolBar;
