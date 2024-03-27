import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Opendata.css";
import { useTranslation } from "react-i18next";

//Davlat mulki obyektlaridan samarali foydalanish markazi xarajatlar smetasining ijrosi bo‘yicha maʼlumotlar
              // 1-chorak
import data11 from "../../assets/opendata/Марказнинг бюджетдан ташкари маблаглари ижроси 1 кв.xlsx";
import data12 from "../../assets/opendata/Марказнинг ривожлантириш жамгармаси ижроси  1 кв.xlsx";
import data13 from "../../assets/opendata/Бюджет маблаглари ижроси хисоботи 2 шакл 1 кв.xlsx";
              // 2-chorak
import data21 from "../../assets/opendata/Марказнинг бюджетдан ташкари маблаглари ижроси 2 кв.xlsx";
import data22 from "../../assets/opendata/Марказнинг ривожлантириш жамгармаси ижроси  2 кв.xlsx";
import data23 from "../../assets/opendata/Бюджет маблаглари ижроси хисоботи 2 шакл 2 кв.xlsx";
              // 3-chorak
import data31 from "../../assets/opendata/23-3/2. Давлат объектларидан фойдаланиш маркази Бюджетдан ташкари маблаглари ижроси 3 кв.xlsx";
import data32 from "../../assets/opendata/23-3/3. Давлат объектларидан фойдаланиш маркази Ривожлантириш жамгармаси ижроси  3 кв.xlsx";
import data33 from "../../assets/opendata/23-3/1. Давлат объектларидан фойдаланиш маркази Бюджет маблаглари ижроси 2 шакл 3 кв.xlsx";

              // 4-chorak
import data141 from "../../assets/opendata/23-4/2. Давлат объектларидан фойдаланиш маркази Бюджетдан ташкари маблаглари ижроси 4 кв.xlsx";
import data142 from "../../assets/opendata/23-4/3. Давлат объектларидан фойдаланиш маркази Ривожлантириш жамгармаси ижроси  4 кв.xlsx";
import data143 from "../../assets/opendata/23-4/1. Давлат объектларидан фойдаланиш маркази Бюджет маблаглари ижроси 2 шакл 4 кв.xlsx";

//Byudjet jarayonining ochiqligini taʼminlash maqsadida veb-saytlarga maʼlumotlarni joylashtirish tartibiga (ro‘yxat raqami -3299) muvofiq maʼlumotlar
              // 2-3-4-chorak
import data4 from "../../assets/opendata/1-14 иловалар (2-чорак) Марказ.xlsx";
import data43 from "../../assets/opendata/23-3/4. Давлат объектларидан фойдаланиш маркази 1-14 иловалар (3-кв).xlsx";
import data44 from "../../assets/opendata/23-4/4. Давлат объектларидан фойдаланиш маркази 1-14 иловалар (4-кв).xlsx";

//Davlat mulki obyektlaridan samarali foydalanish markazi | Balans
              // 1-2-3-4-chorak
import data51 from "../../assets/opendata/Баланс 1 кв 2023.xlsx";
import data52 from "../../assets/opendata/Баланс 2 кв 2023.xlsx";
import data53 from "../../assets/opendata/23-3/5. Давлат объектларидан фойдаланиш маркази Баланс 3 кв 2023.xlsx";
import data54 from "../../assets/opendata/23-4/5. Давлат объектларидан фойдаланиш маркази Баланс 4 кв 2023.xlsx";

//Davlat mulki obyektlaridan samarali foydalanish markazining debitor va kreditor qarzdorliklari yuzasidan maʼlumotlar
              // 1-2-3-4-chorak
import data61 from "../../assets/opendata/Дебиторлик кредиторлик карздорлик тугрисида маълумот 1 кв 2023.xlsx";
import data62 from "../../assets/opendata/Дебиторлик кредиторлик карздорлик тугрисида маълумот 2 кв 2023.xlsx";
import data63 from "../../assets/opendata/23-3/6. Давлат объектларидан фойдаланиш маркази Деб Кред карздорлик 3 кв 2023.xlsx";
import data64 from "../../assets/opendata/23-4/6. Давлат объектларидан фойдаланиш маркази Деб Кред карздорлик 4 кв 2023.xlsx";


//Vazirlik va idoralar, boshqaruv organlari va boshqa tashkilotlar bo‘yicha tarmoq, shtatlar va kontingentga doir rejaning bajarilishi (byudjet mablag‘lari bo‘yicha) to‘g‘risida
              // 1-2-3-4-chorak
import data71 from "../../assets/opendata/Сеть отчёт 1 кв.xlsx";
import data73 from "../../assets/opendata/23-3/7. Давлат объектларидан фойдаланиш маркази Сеть отчёт 3 кв.xlsx";
import data74 from "../../assets/opendata/23-4/7. Давлат объектларидан фойдаланиш маркази Сеть отчёт 4 кв.xlsx";

//Davlat mulki obyektlaridan samarali foydalanish markazining byudjet va byudjetdan tashqari mablag‘lari hisobiga amalga oshirilgan davlat xaridlari to‘g‘risida maʼlumot
              // 2-3-4-chorak
import data82 from "../../assets/opendata/Давлат харидлари 2 кв 2023.xlsx";
import data83 from "../../assets/opendata/23-3/8. Давлат объектларидан фойдаланиш маркази Давлат харидлари 3 кв 2023.xlsx";
import data84 from "../../assets/opendata/23-4/8. Давлат объектларидан фойдаланиш маркази Давлат харидлари 4 кв 2023.xlsx";

//Davlat mulki obyektlaridan samarali foydalanish markazining xodimlarining xizmat safari xarajatlari to‘g‘risida maʼlumot
              // 1-2-3-4-chorak
import data9 from "../../assets/opendata/Командировка  январь-июнь 2023 г.xlsx";
import data93 from "../../assets/opendata/23-3/9. Давлат объектларидан фойдаланиш маркази Командировка  январь-сентябрь 2023 г.xlsx";
import data94 from "../../assets/opendata/23-4/9_Давлат_объектларидан_фойдаланиш_маркази_Командировка_январь_декабрь.xlsx";

//Davlat mulki obyektlaridan samarali foydalanish markazining davlat byudjeti, davlat maqsadli jamg‘armalari hamda byudjet tashkilotlarining byudjetdan tashqari jamg‘armalari hisobiga xarid qilinishi rejalashtirilgan tovarlar (ishlar, xizmatlar) to‘g‘risidagi maʼlumot
              // 3-4-chorak
              //2024-1-chorak
import data10 from "../../assets/opendata/Харидлар режаси 3 кв 2023.xlsx";
import data103 from "../../assets/opendata/23-3/10. Давлат объектларидан фойдаланиш маркази Харидлар режаси 4 кв 2023.xlsx";
import data241 from "../../assets/opendata/23-4/10. Давлат объектларидан фойдаланиш маркази Харидлар режаси 1 кв 2024.xlsx";



const OpenDataPage = () => {
  const { t } = useTranslation();
 
  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("Opendata.Title")}</h3>
            </div>
          </Col>
        </Row>
        <Row className="str-chart">
          </Row>
          <Row>
            <p className="title1"> Davlat mulki obyektlaridan samarali foydalanish markazi xarajatlar smetasining ijrosi bo‘yicha maʼlumotlar </p>
            </Row>
            <table class="table table-sm">
  <thead>
  <tr>
      <td className="first">#</td>
      <td>Davr</td>
      <td>Fayl</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><p className="first">1</p></td>
      <td>2023-yil 1-chorak</td>
      <td><a href={data11} target="_blank">Yuklab olish</a>  &nbsp; / &nbsp; <a href={data12} target="_blank">Yuklab olish</a> &nbsp; / &nbsp; <a href={data13} target="_blank">Yuklab olish</a></td>
    </tr>
    <tr className="bgtr">
      <td><p className="first">2</p></td>
      <td>2023-yil 2-chorak</td>
      <td><a href={data21} target="_blank">Yuklab olish</a>  &nbsp; / &nbsp; <a href={data22} target="_blank">Yuklab olish</a> &nbsp; / &nbsp; <a href={data23} target="_blank">Yuklab olish</a></td>
    </tr>
    <tr >
      <td><p className="first">3</p></td>
      <td>2023-yil 3-chorak</td>
      <td><a href={data31} target="_blank">Yuklab olish</a>  &nbsp; / &nbsp; <a href={data32} target="_blank">Yuklab olish</a> &nbsp; / &nbsp; <a href={data33} target="_blank">Yuklab olish</a></td>
    </tr>
    <tr >
      <td><p className="first">4</p></td>
      <td>2023-yil 4-chorak</td>
      <td><a href={data141} target="_blank">Yuklab olish</a>  &nbsp; / &nbsp; <a href={data142} target="_blank">Yuklab olish</a> &nbsp; / &nbsp; <a href={data143} target="_blank">Yuklab olish</a></td>
    </tr>
  </tbody>
</table>



        <p className="title2"> Byudjet jarayonining ochiqligini taʼminlash maqsadida veb-saytlarga maʼlumotlarni joylashtirish tartibiga (ro‘yxat raqami -3299) muvofiq maʼlumotlar </p>


        <table class="table table-sm">
  <thead>
  <tr>
      <td className="first">#</td>
      <td>Davr</td>
      <td>Fayl</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><p className="first">1</p></td>
      <td>2023-yil 2-chorak</td>
      <td><a href={data4} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">2</p></td>
      <td>2023-yil 3-chorak</td>
      <td><a href={data43} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">3</p></td>
      <td>2023-yil 4-chorak</td>
      <td><a href={data44} target="_blank">Yuklab olish</a>  </td>
    </tr>
  </tbody>
</table>

        <p className="title2"> Davlat mulki obyektlaridan samarali foydalanish markazi | Balans maʼlumotlar </p>


        <table class="table table-sm">
  <thead>
  <tr>
      <td className="first">#</td>
      <td>Davr</td>
      <td>Fayl</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><p className="first">1</p></td>
      <td>2023-yil 1-chorak</td>
      <td><a href={data51} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td><p className="first">2</p></td>
      <td>2023-yil 2-chorak</td>
      <td><a href={data52} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr >
      <td><p className="first">3</p></td>
      <td>2023-yil 3-chorak</td>
      <td><a href={data53} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr >
      <td><p className="first">4</p></td>
      <td>2023-yil 4-chorak</td>
      <td><a href={data54} target="_blank">Yuklab olish</a>  </td>
    </tr>
  </tbody>
</table>

        <p className="title2"> Davlat mulki obyektlaridan samarali foydalanish markazining debitor va kreditor qarzdorliklari yuzasidan maʼlumotlar </p>


        <table class="table table-sm">
  <thead>
  <tr>
      <td className="first">#</td>
      <td>Davr</td>
      <td>Fayl</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><p className="first">1</p></td>
      <td>2023-yil 1-chorak</td>
      <td><a href={data61} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td><p className="first">2</p></td>
      <td>2023-yil 2-chorak</td>
      <td><a href={data62} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr>
      <td><p className="first">3</p></td>
      <td>2023-yil 3-chorak</td>
      <td><a href={data63} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr>
      <td><p className="first">4</p></td>
      <td>2023-yil 4-chorak</td>
      <td><a href={data64} target="_blank">Yuklab olish</a>  </td>
    </tr>
  </tbody>
</table>

        <p className="title2"> Vazirlik va idoralar, boshqaruv organlari va boshqa tashkilotlar bo‘yicha tarmoq, shtatlar va kontingentga doir rejaning bajarilishi (byudjet mablag‘lari bo‘yicha) to‘g‘risida </p>


        <table class="table table-sm">
  <thead>
  <tr>
      <td className="first">#</td>
      <td>Davr</td>
      <td>Fayl</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><p className="first">1</p></td>
      <td>2023-yil 1-chorak</td>
      <td><a href={data71} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">2</p></td>
      <td>2023-yil 3-chorak</td>
      <td><a href={data73} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">3</p></td>
      <td>2023-yil 4-chorak</td>
      <td><a href={data74} target="_blank">Yuklab olish</a>  </td>
    </tr>
  </tbody>
</table>

        <p className="title2"> Davlat mulki obyektlaridan samarali foydalanish markazining byudjet va byudjetdan tashqari mablag‘lari hisobiga amalga oshirilgan davlat xaridlari to‘g‘risida maʼlumot </p>


        <table class="table table-sm">
  <thead>
  <tr>
      <td className="first">#</td>
      <td>Davr</td>
      <td>Fayl</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><p className="first">1</p></td>
      <td>2023-yil 2-chorak</td>
      <td><a href={data82} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">2</p></td>
      <td>2023-yil 3-chorak</td>
      <td><a href={data83} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">3</p></td>
      <td>2023-yil 4-chorak</td>
      <td><a href={data84} target="_blank">Yuklab olish</a>  </td>
    </tr>
  </tbody>
</table>

        <p className="title2"> Davlat mulki obyektlaridan samarali foydalanish markazining xodimlarining xizmat safari xarajatlari to‘g‘risida maʼlumot</p>


        <table class="table table-sm">
  <thead>
  <tr>
      <td className="first">#</td>
      <td>Davr</td>
      <td>Fayl</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><p className="first">1</p></td>
      <td>2023-yil 1-2-chorak</td>
      <td><a href={data9} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">2</p></td>
      <td>2023-yil 3-chorak</td>
      <td><a href={data93} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">3</p></td>
      <td>2023-yil 4-chorak</td>
      <td><a href={data94} target="_blank">Yuklab olish</a>  </td>
    </tr>
  </tbody>
</table>

        <p className="title2"> Davlat mulki obyektlaridan samarali foydalanish markazining davlat byudjeti, davlat maqsadli jamg‘armalari hamda byudjet tashkilotlarining byudjetdan tashqari jamg‘armalari hisobiga xarid qilinishi rejalashtirilgan tovarlar (ishlar, xizmatlar) to‘g‘risidagi
maʼlumot</p>


        <table class="table table-sm">
  <thead>
  <tr>
      <td className="first">#</td>
      <td>Davr</td>
      <td>Fayl</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td ><p className="first">1</p></td>
      <td>2023-yil 3-chorak</td>
      <td><a href={data10} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">2</p></td>
      <td>2023-yil 4-chorak</td>
      <td><a href={data103} target="_blank">Yuklab olish</a>  </td>
    </tr>
    <tr className="bgtr">
      <td ><p className="first">3</p></td>
      <td>2024-yil 1-chorak</td>
      <td><a href={data241} target="_blank">Yuklab olish</a>  </td>
    </tr>
  </tbody>
</table>


      </Container>
    </div>
  );
};

export default OpenDataPage;
