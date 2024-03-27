import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contacts.css";
import "../About/aboutcompany.css";
import {useTranslation} from 'react-i18next';


const Contacts = () => {

  const {t} = useTranslation()

  return (
    <div className="MainContentContacts">
      <Container>
        <Row>
          <Col>
            <div className="mainTitle">
              <div className="secondTitlePage stp">Davlat mulki obyektlari markazi</div>
              <div className="firstTitlePage ftp">{t("Menu.contact_info")}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6" sm="12">
            <div className="contactData">
              <div className="title">{t("Contacts.adress")}</div>
              <div className="dataOfTitle">
              {t("Contacts.locationInfo1")}
                <br /> {t("Contacts.locationInfo2")}
                <br /> {t("Contacts.locationInfo3")}
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12">
            <div className="contactData">
              <div className="title">{t("Contacts.fax")}</div>
              <div className="dataOfTitle">
                <div className="faxNumbers">+998 (71) 231-27-84</div>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12">
            <div className="contactData">
              <div className="title">{t("Contacts.callCenter")}</div>
              <div className="dataOfTitle">
                <a className="phoneNumbers" href="tel:+998712592114">+998 (71) 259-21-14</a>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12">
            <div className="contactData">
              <div className="title">E-mail:</div>
              <div className="dataOfTitle">info@obyekt.uz</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="manzil">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.5067254149783!2d69.27786230061072!3d41.30857099616509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3e84961d23%3A0x24324ccd4e212dda!2sBo%CA%BBsh%20turgan%20obyektlardan%20samarali%20foydalanishni%20tashkil%20etish%20markazi!5e0!3m2!1sen!2sru!4v1657013062184!5m2!1sen!2sru"
              title="map"
              width="100%"
              height="450"
              className="map"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contacts;
