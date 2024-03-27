import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./notFound.css";
import "./repair_img.scss";
import "../About/AboutCompany";
import notfound404 from "../../assets/404.gif";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="StaffContent">
      <Container>
        <Row>
          <Col>
            <div className="mainTitles404">
              <div className="secondTitlePage not-found-img"><img src={notfound404} alt="" srcset="" /></div>
              <div className="secondTitlePage notfound">{t("PageNotFound")}</div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFoundPage;
