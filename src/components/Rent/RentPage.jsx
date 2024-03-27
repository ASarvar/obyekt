import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Rent.css";
import { useTranslation } from "react-i18next";
import director from "../../assets/hr/director.png";
import Button from 'react-bootstrap/Button';
// import deps from "./Rent.json";

const DepartmentsPage = () => {
  const { t } = useTranslation()
  // console.log(deps)

  


 
  return (
    
    <div className="aboutContentBox">
      <Container className="ijara-auc">
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              {/* <h3 className="secondTitle">{t("Departments.title")}</h3> */}
              <h3 className="secondTitle">Ijaraga beriladigan auksiondagi obyektlar</h3>
            </div>
          </Col>
        </Row>

        <Row>
    <div className="card-item">
      <div className="card-item-head"> 
        <div className="card-content">
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=13" target="blank">Qoraqalpogʻiston Respublikasi</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=7" target="blank">Andijon viloyati</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=11" target="blank">Buxoro viloyati</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=4" target="blank">Jizzax viloyati</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=9" target="blank">Qashqadaryo viloyati</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=12" target="blank">Navoiy viloyati</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=8" target="blank">Namangan viloyati</a> <br />
        </div>
        <div className="card-content">
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=3" target="blank">Samarqand Respublikasi</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=10" target="blank">Surxondaryo viloyati</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=5" target="blank">Sirdaryo viloyati</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=1" target="blank">Toshkent shahri</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=2" target="blank">Toshkent viloyati</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=6" target="blank">Fargʻona viloyati</a> <br />
            <a href="https://e-auksion.uz/lots?group=11&index=1&page=1&lt=0&at=0&order=0&region=14" target="blank">Xorazm viloyati</a> <br />
        </div>
      </div>
    </div>

    </Row>
          
      </Container>
    </div>
  );
};

export default DepartmentsPage;
