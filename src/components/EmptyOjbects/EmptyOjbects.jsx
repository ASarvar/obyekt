import React from "react";
import { Container, Row, Col, Alert, Table, Badge } from "react-bootstrap";
import axios from "axios";
import "./EmptyOjbects.css";
import { useTranslation } from "react-i18next";
// import structureChart from "../../assets/structure.svg";


export default class EmptyOjbects extends React.Component {
  state = {
    buildings: []
  }
  
  
  

  

  componentDidMount() {
    
    // const { t } = useTranslation();
    const baseURL = "http://84.54.82.173:8081/api/get-empty-objects-data";
    // const baseURL = "http://192.168.1.254:8145/api/get-empty-objects-data";

    axios.get(baseURL)
      .then(res => {
        const buildings = res.data;
        this.setState({ buildings });
      }).catch(error => {
        console.log("error fr sb ", error)
      })
      
      // console.log("here: ", buildings)
  }

  
  render() {
  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              {/* <h3 className="secondTitle">{t("EmptyOjbects.title")}</h3> */}
              <h3 className="secondTitle">Bo'sh turgan obyektlar</h3>
            </div>
          </Col>
        </Row>
        <Row className="str-chart">
          
        <Table striped className="building-table">
        <tbody>
        {
          this.state.buildings
            .map(building =>
              <div className="building-div"> 
              <tr>
                <td><Badge bg="secondary">{building.doc_id}</Badge></td>
                <td>Bino nomi:</td>
                <td>{building.building_name}</td>
              </tr>
              <tr>
                <td></td>
                <td>Manzili:</td>
                <td>{building.region}&nbsp;{building.district}&nbsp;{building.mahalla}</td>
              </tr>
              <tr>
                <td></td>
                <td>Balansda saqlovchisi:</td>
                <td>{building.owner}</td>
              </tr>
              <tr>
                <td></td>
                <td>Boʻsh turgan qismi(m2):</td>
                <td>{building.empty_area}</td>
              </tr>
              <tr>
                <td></td>
                <td>Xaritada joshlashuvi:</td>
                <td> <a href={`https://www.google.com/maps?q=`+building.lat+`,`+building.long} target="_blank">{building.lat}, {building.long}</a> </td>
              </tr>
              </div>
            )
        }
      </tbody>
      </Table>
      

          </Row>
          <Row>
            <h3 className="consAsia"></h3>
            </Row>
          
      </Container>
    </div>
  );
}
}

