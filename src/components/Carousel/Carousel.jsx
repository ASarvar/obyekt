import React from "react";
import { Link } from "react-router-dom";
import "swiper/swiper.scss";
import "./Styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { useTranslation } from "react-i18next";
import callIcon from "../../assets/call-icon.svg";

import { Container } from "react-bootstrap";

import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper/core";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Carousel = () => {
  const { t } = useTranslation();

  // function handleClick(lang) {
  //   i18n.changeLanguage(lang);
  // }
  return (
    <div className="CarouselBox">
      <div className="callBox">
          <div className="call-button-left">
             <a href="tel:+998712592114">
            
            <img src={callIcon} alt="" />
            </a>
          </div>
        </div>
   
      <Swiper
        loop
        effect="fade"
        navigation={
          (true, { prevEl: ".pagination .left", nextEl: ".pagination .right" })
        }
        scrollbar={{ draggable: true }}
        pagination={{ el: ".pag", clickable: true }}
        className="headerSwiper"
      >
        <SwiperSlide>
          <div className="sliderItem sliderItem_1">
            <Container>
              <div className="sliderTitleBg">
              <Link as={Link} className="navLink" to="/news2" style={{ textDecoration: 'none' }}>              
                  <h2 className="sliderTitle">{t("CarouselHeader.title1")}</h2>
              </Link>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderItem sliderItem_2">
            <Container>
              <div className="sliderTitleBg">
                  <h2 className="sliderTitle">
                  {t("CarouselHeader.title2")}
                  </h2>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliderItem sliderItem_3">
            <Container>
              <div className="sliderTitleBg">
                  <h2 className="sliderTitle">
                  {t("CarouselHeader.title3")}
                  </h2>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <Container>
          <div className="pagination">
            <div className="arrows left">
              <BsChevronLeft className="bsIcon" />
            </div>
            <div className="pag"></div>
            <div className="arrows right">
              <BsChevronRight className="bsIcon" />
            </div>
          </div>
        </Container>
        
      </Swiper>
       </div>
  );
};

export default Carousel;
