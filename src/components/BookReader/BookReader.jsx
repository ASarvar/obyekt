import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BookReader.css";
import { useTranslation } from "react-i18next";
import HTMLFlipBook from "react-pageflip";
import {PageFlip} from 'page-flip';

import ebook1 from "../../assets/book/Algoritmlash va dasturlash asoslari (A.Azamatov)_Page_001_Image_0001.jpg"
import ebook2 from "../../assets/book/Algoritmlash va dasturlash asoslari (A.Azamatov)_Page_002_Image_0001.jpg"
import ebook3 from "../../assets/book/Algoritmlash va dasturlash asoslari (A.Azamatov)_Page_003_Image_0001.jpg"
import ebook4 from "../../assets/book/Algoritmlash va dasturlash asoslari (A.Azamatov)_Page_004_Image_0001.jpg"
import ebook5 from "../../assets/book/Algoritmlash va dasturlash asoslari (A.Azamatov)_Page_005_Image_0001.jpg"
import ebook6 from "../../assets/book/Algoritmlash va dasturlash asoslari (A.Azamatov)_Page_006_Image_0001.jpg"
import ebook7 from "../../assets/book/Algoritmlash va dasturlash asoslari (A.Azamatov)_Page_007_Image_0001.jpg"
import ebook8 from "../../assets/book/Algoritmlash va dasturlash asoslari (A.Azamatov)_Page_008_Image_0001.jpg"
import ebook9 from "../../assets/book/Algoritmlash va dasturlash asoslari (A.Azamatov)_Page_009_Image_0001.jpg"
import ebook10 from "../../assets/book/Algoritmlash va dasturlash asoslari (A.Azamatov)_Page_010_Image_0001.jpg"

const bookPages =[ebook1, ebook2, ebook3, ebook4, ebook5, ebook6 ]


function BookReader(props) {
  return (
    <Container>
      <HTMLFlipBook className="designBook" width={400} height={600}>
          <div className="pageStyle"><img src={ebook1} /></div>
          <div className="pageStyle"><img src={ebook2} /></div>
          <div className="pageStyle"><img src={ebook3} /></div>
          <div className="pageStyle"><img src={ebook4} /></div>
          <div className="pageStyle"><img src={ebook5} /></div>
          <div className="pageStyle"><img src={ebook6} /></div>
          <div className="pageStyle"><img src={ebook7} /></div>
          <div className="pageStyle"><img src={ebook8} /></div>
          <div className="pageStyle"><img src={ebook9} /></div>
          <div className="pageStyle"><img src={ebook10} /></div>
      </HTMLFlipBook>
    </Container>
);

 
}

export default BookReader;
