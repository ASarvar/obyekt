import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutcompany.css";
import { useTranslation } from "react-i18next";
import { Bar } from "react-chartjs-2";

const AboutCompany = () => {
  const { t } = useTranslation();
 
  return (
    <div className="aboutContentBox">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="AboutContent">
              <h3 className="secondTitle">{t("AboutCompany.Title")}</h3>
              <h1 className="firstTitle"></h1>
              <div className="text-content">
                {/* <p className="paragraf">{t("AboutPage.Content.0")}</p>
                <p className="paragraf">{t("AboutPage.Content.1")}</p>
                <p className="paragraf">{t("AboutPage.Content.2")}</p>
                <p className="paragraf">{t("AboutPage.Content.3")}</p>
                <p className="paragraf">{t("AboutPage.Content.4")}</p> */}


<p>O‘zbekiston Respublikasi Prezidentining 2020 yil 1 iyuldagi PQ–4771-son “Bo‘sh turgan obyektlardan samarali foydalanishni tashkil etish va axborot-kommunikatsiya texnologiyalarini keng joriy etish chora-tadbirlari to‘g‘risida”gi qarori bilan O‘zbekiston Respublikasi Davlat aktivlarini boshqarish agentligi huzuridagi Bo‘sh turgan obyektlardan samarali foydalanishni tashkil etish markazi (keyingi o‘rinlarda — Markaz) hamda uning Qoraqalpog‘iston Respublikasi, viloyatlar va Toshkent shahar hududiy boshqarmalari tashkil etilgan.</p>

<p>Markaz  va uning hududiy boshqarmalariga quyidagi vazifalar belgilab berilgan:</p>

<p>mulkchilik shaklidan qatʼi nazar barcha toifadagi bo‘sh turgan noturar bino va inshootlarni, foydalanilmayotgan ishlab chiqarish maydonlarini aniqlash va hisobini yuritish;</p>

<p>bo‘sh turgan davlat mulki obyektlarini saqlash va ulardan samarali foydalanish, shu jumladan davlat mulki obyektlarini ijaraga berishni tashkil etish;</p>

<p>ijaraga berilgan davlat mulki obyektlarini va ularni ijaraga berishdan tushadigan mablag‘larni hisobga olish va ularning monitoringini olib borish;</p>

<p>ijaraga berilgan davlat mulki obyektlaridan maqsadli foydalanilishini va ularning saqlanishini, shuningdek, ijara to‘lovi o‘z vaqtida va to‘liq to‘lanishini nazorat qilish;</p>

<p>davlat muassasalari (korxonalari)ga biriktirilgan davlat mulki obyektlaridan samarali foydalanilishi va ularning saqlanishini belgilangan tartibda tekshirish;</p>

<p>davlat muassasalari (korxonalari)ga operativ boshqaruv huquqi bilan berilgan davlat mulki obyektlarining ortiqcha qismini, shuningdek, foydalanilmayotgan yoki maqsadsiz foydalanilayotgan davlat mulki obyektlarini olib qo‘yish;</p>

<p>Qurilish sohasida nazorat inspeksiyasi xulosasiga asosan yaroqsiz deb topilgan davlat mulki obyektlarini buzish to‘g‘risida qaror qabul qilish;</p>

<p>bo‘sh turgan xususiy mulk obyektlarini ularning mulkdorlari ixtiyoriga ko‘ra ijaraga berilishida har tomonlama amaliy yordam ko‘rsatish.</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <h2 className="chartTitle"></h2>
          </Row>
          <Row>
            <h3 className="consAsia"></h3>
            </Row>
          
      </Container>
    </div>
  );
};

export default AboutCompany;
