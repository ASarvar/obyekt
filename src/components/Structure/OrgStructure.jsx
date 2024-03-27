import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Structure.css";
import { useTranslation } from "react-i18next";
import structureChart from "../../assets/structure.svg";


const OrgStructure = () => {
  const { t } = useTranslation();
 
  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("Structure.Title")}</h3>
            </div>
          </Col>
        </Row>
        <Row className="str-chart">
          <img src={structureChart} alt="" srcset="" />
          </Row>
          <Row>
            <h3 className="consAsia"></h3>
            </Row>
          
      </Container>
    </div>
  );
};

export default OrgStructure;
