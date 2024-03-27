import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import { useTranslation } from "react-i18next";
import { Bar } from "react-chartjs-2";

const AboutCompany = () => {
  const { t } = useTranslation();
  
  return (
    <div className="aboutContentBox">
      <div className="vertical-line"></div>
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("AboutCompany.Title")}</h3>
              <h1 className="firstTitle">Home</h1>
              <div className="text-content">{t("AboutPage.Content")}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <h2 className="chartTitle">{t('AboutPage.ChartTitle')}</h2>
          </Row>
          <Row>
            <h3 className="consAsia">Home text</h3>
            </Row>
          <Row>
          <Bar data={ChartData.dataHorizontal} options={{ responsive: true }} />
          <div className="totalCount">{t('AboutPage.totalCount')} <b>{result}</b></div>
        </Row>
      </Container>
    </div>
  );
};

export default AboutCompany;
