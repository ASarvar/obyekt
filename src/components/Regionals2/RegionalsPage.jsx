import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./RegionalsPage.css";
import { useTranslation } from "react-i18next";
import Button from 'react-bootstrap/Button';
import regionals from "./regionals.json";
import Accordion from 'react-bootstrap/Accordion';


const RegionalsPage = () => {
  const { t } = useTranslation()
  console.log(regionals)

  const regionalsView = regionals.map((person, index) => {
    return (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{person.reg_name}</Accordion.Header>
            <Accordion.Body>
            <div className="card-item" key={index}>
      <div className="card-item-head">
        <div className="card-image">

          <img src={require(`../../assets/hr/${person.pic}`).default} alt={person.head} className="card-image"/>
        </div>  
        <div className="card-content">
          <h5><b>{person.dep_name}</b></h5>
          <h5>{person.head}</h5>
          <div className="card-contacts">
            <div className="card-contacts-item">              
              <label>{person.occupation} </label>
            </div>
            {/* <div className="card-contacts-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" fill="rgba(0,140,161,1)"/></svg>
              <label>&nbsp;Qabul kunlari: {person.reception_days} </label>
            </div> */}
            <div className="card-contacts-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" fill="rgba(0,140,161,1)"/></svg>
              <label>&nbsp;Telefon: </label>
              <a href={"tel:"+person.phone}> {person.phone}</a>
            </div>
            <div className="card-contacts-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" fill="rgba(0,140,161,1)"/></svg>
              <label>&nbsp;E-pochta: </label>
              <a href={`mailto:${person.email}`}> {person.email}</a>
            </div>
          </div>
        </div>
        <div className="card-button">
          <Button variant="info">Funksiya va vazifalari</Button>
        </div>
      </div>
      <Row>
          <Col className="reg-address">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.5067254149783!2d69.27786230061072!3d41.30857099616509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3e84961d23%3A0x24324ccd4e212dda!2sBo%CA%BBsh%20turgan%20obyektlardan%20samarali%20foydalanishni%20tashkil%20etish%20markazi!5e0!3m2!1sen!2sru!4v1657013062184!5m2!1sen!2sru"
              title="map"
              width="100% !important"
              height="450"
              className="map"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
    </div>
            
            </Accordion.Body>
          </Accordion.Item>
  )})


 
  return (
    
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              {/* <h3 className="secondTitle">{t("Departments.title")}</h3> */}
              <h3 className="secondTitle">Hududiy boshqarmalar</h3>
            </div>
          </Col>
        </Row>
        <Accordion>{regionalsView}</Accordion>
      </Container>

      
    </div>
  );
};

export default RegionalsPage;
