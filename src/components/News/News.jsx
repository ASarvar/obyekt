import React, { useState, useEffect, Fragment } from "react"
import { Container } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import { BsChevronLeft, BsChevronRight, BsArrowRight } from "react-icons/bs"
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./news.css"
import SwiperCore, { Navigation } from "swiper/core"
import axios from "axios"
import { Link } from "react-router-dom"
import reactHtmlParser from "react-html-parser"
import { useApi } from "../../context/api"
import { useLang } from '../../context/language.jsx'
import {useTranslation} from 'react-i18next';
import mygov from "../../assets/news/mygov.jpg";
import tadbir1 from "../../assets/news/tadbir1.jpg";
import tadbir2 from "../../assets/news/tadbir2.jpg";


SwiperCore.use([Navigation])

const News = () => {
  const [articles, setArticles] = useState([])
  const {t} = useTranslation()
  const [api] = useApi()
  const [lang] = useLang()
  async function getArticles(api) {
    const articleRes = await axios.get(api + "/articles")
    setArticles(articleRes.data)
  }

  useEffect(() => {
    getArticles(api)
  }, [api])

  function renderList(articles) {
    return articles.map((article, i) => <Fragment key ={i}>
	<SwiperSlide key={i}>
	  <div className="CartItem">
		<div className="cartImageBox">
		  <img
			src={api + '/images/' + article.newsImage}
			className="imageSection2"
			alt={article.title}
		  />
		</div>

		<h4 className="title">
		  {
		  article && article.title.length >= 50
			? (lang === 'uz' ?
			article.title.substring(0, 50) + "..." :
			article.titleRu.substring(0, 50) + "..."
			)
			: (lang === 'uz' ? article.title : article.titleRu)
			}
		</h4>
		<div className="desc">
		  {article.markdown.length >= 150
			? reactHtmlParser((lang === 'uz' ?
			article.markdown.substring(0, 150) + "..." :
			article.markdownRu.substring(0, 150) + "..." ))
			: reactHtmlParser(lang === 'uz' ? article.markdown : article.markdownRu)}
		</div>

		<hr />
		<div className="read-more">
		  <Link to={`/articles/${article._id}`}>
			Читать дальше
			<BsArrowRight className="bsArrowRight" />
		  </Link>
		</div>
	  </div>
	</SwiperSlide>
  </Fragment>)
  }

  return (
    <div className="newsContent">
      <Container>
        <h2 className="MainTitle">{t("News.title")}</h2>
        <hr />
        <div className="MainContent line">
          <div className="newsTime">29.02.2024</div>
          <div className="newsTitle">"Tizimda korrupsiyaga qarshi kurashish borasida amalga oshirilgan ishlar yuzasidan tadbir o‘tkazildi</div>
        
        <div className="newsText">

          <p>Joriy yilning 26-fevral kuni Davlat mulki obyektlaridan samarali foydalanish markazida Buxoro viloyati prokuraturasining “Qonunbuzilishi, uning kelib chiqish sabablari va bunga imkoniyat yaratib berayotgan shart-sharoitlarni bartaraf etish to‘g‘risida” taqdimnomasi muhokamasi va tizimda korrupsiyaga qarshi kurashish borasida amalga oshirilgan ishlar bo‘yicha tadbir o‘tkazildi.</p>
          <p>Tadbirda O‘zbekiston Respublikasi Bosh prokuraturasi boshqarma prokurori A.Yusupov, Davlat aktivlarini boshqarish agentligi Korrupsiyaga qarshi kurashish va komplaens bo‘limi boshlig‘i A.Rajabov, Davlat mulki obyektlaridan samarali foydalanish markaziining markaziy apparati va hududiy boshqarmalari xodimlari ishtirok etdi.</p>
          <img src={tadbir1} alt="" srcset="" className="newsImage"/>
          <p>O‘zbekiston Respublikasi Bosh prokuraturasi boshqarma prokurori A.Yusupov Davlat mulki obyektlaridan samarali foydalanish markazi tizimida davlat mulkini ijaraga berish sohasida bir qancha ishlar amalga oshirilganligini, shu bilan bir qatorda faoliyatda uchrab turgan xato va kamchiliklarni, xususan Buxoro viloyati prokuraturasining taqdimnomasida qayd etilgan holatlarni inobatga olib, ularni bartaraf etish bo‘yicha zarur chora-tadbirlar belgilash, kelgusida bu kabi holatlar takrorlanmasligining oldini olish yuzasidan profilaktik tadbirlarni amalga oshirish maqsadga muvofiqligini ta’kidladi.</p>
          <p>Shundan so‘ng, Davaktiv agentligining Korrupsiyaga qarshi kurashish va komplaens bo‘limi boshlig‘i A.Rajabov so‘zga chiqib, Davaktiv agentligi, shu jumladan Davlat mulki obyektlaridan samarali foydalanish markazi tizimida korrupsiyaviy omillarni bartaraf etish, faoliyatga raqamli texnologiyalarni joriy etish, axborot texnologiyalari vositasida xizmatlar ko‘rsatish borasida bir qancha ishlar amalga oshirilganligini qayd etdi.</p>
          <img src={tadbir1} alt="" srcset="" className="newsImage"/>
          <p>Tadbir davomida, video-konferens aloqa orqali bog‘langan hududiy boshqarmalar boshliqlarining tushuntirishlari, korrupsiyaning oldini olish borasida amalga oshirilgan ishlar yuzasidan hisobotlari eshitildi.</p>

        </div>
        </div>
        <hr></hr>
        <div className="MainContent">
          <div className="newsTime">28.12.2023</div>
          <div className="newsTitle">"Bo‘sh turgan davlat mulki obyektlari to‘g‘risida ma’lumotlar" davlat xizmati joriy qilindi</div>
        <img src={mygov} alt="" srcset="" className="newsImage"/>
        <div className="newsText">

Davlat aktivlarini boshqarish agentligi huzuridagi Davlat mulki obyektlaridan samarali foydalanish markazi tomonidan Yagonа interаktiv dаvlаt xizmаtlаri portаlidа аxborot berish tusidаgi Bo‘sh turgan davlat mulki obyektlari to‘g‘risida ma’lumotlar (ro‘yxat) bilan tanishish davlat xizmаti ko'rsatilmoqda.

<br /> Quyidagi havola orqali xizmatdan foydalanish mumkin:
<br /> <a href="https://my.gov.uz/oz/service/756" target="_blank">https://my.gov.uz/oz/service/756</a>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default News
