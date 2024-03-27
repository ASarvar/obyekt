import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AdministrationPage.css";
import { useTranslation } from "react-i18next";
import director from "../../assets/hr/director.png";
import deputyDirector1 from "../../assets/hr/dep-dir1.png";
import deputyDirector from "../../assets/hr/dep-dir.jpg";
import Button from 'react-bootstrap/Button';


const AdministrationPage = () => {
  const { t } = useTranslation()


 
  return (
    
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              {/* <h3 className="secondTitle">{t("Administration.title")}</h3> */}
              <h3 className="secondTitle">Rahbariyat</h3>
            </div>
          </Col>
        </Row>
                {/*  Director */}
        <Row>
        <div className="card-item">
          <div className="card-item-head">
            <div className="card-image">
              <img src={director} alt="Direktor" className="card-image"/>
            </div>
            <div className="card-content">
              <h5><b>Direktor</b></h5>
              <h5>Usmonov Bekzod Shavkat oʻgʻli</h5>
              <div className="card-contacts">
                <div className="card-contacts-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" fill="rgba(0,140,161,1)"/></svg>
                  <label>&nbsp;Qabul kunlari: Dushanba-Juma </label>
                </div>
                <div className="card-contacts-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" fill="rgba(0,140,161,1)"/></svg>
                  <label>&nbsp;Telefon: </label>
                  <a href="tel:(71) 259-21-14"> (71) 259 20 64</a>
                </div>
                <div className="card-contacts-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" fill="rgba(0,140,161,1)"/></svg>
                  <label>&nbsp;E-pochta: </label>
                  <a href="mailto:markaz@davaktiv.uz"> markaz@davaktiv.uz</a>
                </div>
              </div>
            </div>
            <div className="card-button">
              <Button variant="info">Funksiya va vazifalari</Button>
            </div>
          </div>
        </div>

        </Row>
                {/*  First deputy director */}
        <Row>
        <div className="card-item">
          <div className="card-item-head">
            <div className="card-image">
              <img src={deputyDirector1} alt="Direktor" className="card-image"/>
            </div>
            <div className="card-content">
              <h5><b>Direktorning birinchi oʻrinbosari</b></h5>
              <h5>Aminov Rustam Anvarovich</h5>
              <div className="card-contacts">
                <div className="card-contacts-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" fill="rgba(0,140,161,1)"/></svg>
                  <label>&nbsp;Qabul kunlari: Dushanba-Juma </label>
                </div>
                <div className="card-contacts-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" fill="rgba(0,140,161,1)"/></svg>
                  <label>&nbsp;Telefon: </label>
                  <a href="tel:(71) 259-21-14"> (71) 259 21 14</a>
                </div>
                <div className="card-contacts-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" fill="rgba(0,140,161,1)"/></svg>
                  <label>&nbsp;E-pochta: </label>
                  <a href="mailto:markaz@davaktiv.uz"> markaz1@davaktiv.uz</a>
                </div>
              </div>
            </div>
            <div className="card-button">
              <Button variant="info">Funksiya va vazifalari</Button>
            </div>
          </div>
        </div>

        </Row>

        {/* Deputy director */}
        <Row>
        <div className="card-item">
          <div className="card-item-head">
            <div className="card-image">
              <img src={deputyDirector} alt="Direktor" className="card-image"/>
            </div>
            <div className="card-content">
              <h5><b>Direktor o'rinbosari</b></h5>
              <h5>Xakimov Sherzodbek Nabidjonovich</h5>
              <div className="card-contacts">
                <div className="card-contacts-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" fill="rgba(0,140,161,1)"/></svg>
                  <label>&nbsp;Qabul kunlari: Dushanba-Juma </label>
                </div>
                <div className="card-contacts-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" fill="rgba(0,140,161,1)"/></svg>
                  <label>&nbsp;Telefon: </label>
                  <a href="tel:(71) 259-20-11"> (71) 259 20 02</a>
                </div>
                <div className="card-contacts-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" fill="rgba(0,140,161,1)"/></svg>
                  <label>&nbsp;E-pochta: </label>
                  <a href="mailto:markaz@davaktiv.uz"> sh.hakimov@obyekt.uz</a>
                </div>
              </div>
            </div>
            <div className="card-button">
              <Button variant="info">Funksiya va vazifalari</Button>
            </div>
          </div>
        </div>

        </Row>
          
      </Container>
    </div>
  );
};

export default AdministrationPage;
