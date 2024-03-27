import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/Header/Header"
import Carousel from "../components/Carousel/Carousel"
import Mission from "../components/Mission/Mission"
import News from "../components/News/News"
import Services from "../components/Ourservices/Services";
import Footer from '../components/Footer/Footer'
import FooterBottom from '../components/Footer/FooterBottom'
import AboutSection from '../components/AboutSection/AboutSection'
import RentPage from '../components/Rent/RentPage'


const Home = () => {


  return (

    <>
      <Header position='absolut_nav'/>
      <Carousel />
      <RentPage/>
      <Mission />
      <Footer/>
      <FooterBottom/>
    </>
  )
}

export default Home
