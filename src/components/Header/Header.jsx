import React, {useState, useEffect} from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo-dark.svg";
import logo from "../../assets/bto-logo.svg";
import "./Styles.css";
import { useTranslation } from "react-i18next";
import { useLang } from '../../context/language'
import "./s.scss";

const Header = (props) => {
  const { t, i18n } = useTranslation();
  const [setLang] = useLang(true)
  function handleClick(lang) {
    i18n.changeLanguage(lang);
    setLang(lang)
  }

  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // console.log(offset); 



  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};


// Get the navbar
var navbar = document.getElementById("navbar");
// console.log(navbar)

// Get the offset position of the navbar
var sticky = 60;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (navbar && window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else if (navbar) {
    navbar.classList.remove("sticky");
  }
}

  const [activeToggle,setActiveToggle] = useState('')
   
  return (
    <div className="header-sb">
      <div className="top1">
      
        <Navbar.Brand >
          <Link to="/" className="logo">
              <img src={logo} alt="logo" width="240px"/>
          </Link>
        </Navbar.Brand>

        <div class="container test">
        <div class="row">
          <div class="col-md-12 text-center">
            <h7 class="animate-charcter blinking"> Sayt — test rejimida.</h7>
          </div>
        </div>
      </div>

        <Navbar className="topphone">
              <div className="callButton phone">
                <FaPhoneAlt className="phoneIcon" />
                <a href="tel:+998712592114" className="phoneNamber">
                  +998 (71) 259-21-14
                </a>                
              </div>
              <div className="email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"/></svg>
                <a href="mailto:sb@mail.uz">
                 info@obyekt.uz
                </a>
              </div>
        </Navbar>
      </div>
    <div >
      <Navbar className={props.position+" main-nav sticky-nav"} id="navbar" expand="lg">
      <div class="line"></div>
        <Container>
          {/* <div className="toogleBox" aria-controls="basic-navbar-nav" ><img src={toogleIcon} className="toogleMenuIcon"/></div> */}
          <div id="toggle" className={activeToggle} onClick={()=>setActiveToggle(activeToggle === ''? 'activeClass': '')}></div>
          <Navbar.Collapse id="basic-navbar-nav" className={activeToggle}>
            <div className="top2">
            <Nav className="mr-auto menuNav" >
              
              <Nav.Link as={Link} className="navLink hover" to="/">
              {t("Menu.home")}
              </Nav.Link>
              
              <NavDropdown
                title={t("Menu.about.main")}
                className="navLinkDropdown hover"
                // id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} className="navDrop" to="/about">
                {t("Menu.about.aboutCenter")}
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} className="navDrop" to="/administration">
                {t("Menu.about.administration")}
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} className="navDrop" to="/departments">
                {t("Menu.about.departments")}
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} className="navDrop" to="/structure">
                {t("Menu.about.structure")}
                </NavDropdown.Item>
                
                <NavDropdown.Item as={Link} className="navDrop" to="/regionals">
                {t("Menu.about.regionals")}
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} className="navLink hover" to="/auction">
              {/* {t("Menu.contact_info")} */}

              Ijara
              </Nav.Link>
              
              <Nav.Link as={Link} className="navLink hover" to="/news">
              {/* {t("Menu.contact_info")} */}

              Yangiliklar
              </Nav.Link>
              
              {/* <NavDropdown
                title={t("Menu.rent.menu")}
                className="navLinkDropdown hover"
                // id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} className="navDrop" to="/auction">
                {t("Menu.rent.auction")}
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} className="navDrop" to="/contracts">
                {t("Menu.rent.contracts")}
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} className="navDrop" to="/offers">
                {t("Menu.rent.offers")}
                </NavDropdown.Item>
              </NavDropdown> */}
              
              {/* <Nav.Link as={Link} className="navLink hover" to="/news">
              {t("Menu.news")}
              </Nav.Link> */}
              
              <NavDropdown
                title={t("Menu.data.menu")}
                className="navLinkDropdown hover"
                // id="basic-nav-dropdown"
              >

                <NavDropdown.Item as={Link} className="navDrop" to="/empty_objects">
                {t("Menu.data.empty_objects")}
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} className="navDrop" to="/openData">
                {t("Menu.data.open")}
                </NavDropdown.Item>

                {/* <NavDropdown.Item as={Link} className="navDrop" to="/vacancy">
                {t("Menu.data.vacancy")}
                </NavDropdown.Item> */}
              </NavDropdown>

              <Nav.Link as={Link} className="navLink hover" to="/contacts">
              {t("Menu.contact_info")}
              </Nav.Link>
            </Nav>
            {/* <Nav className="langNav">
              <Button
                onClick={() => handleClick("ru")}
                className="navLink langAtribute"
              >
                RU
              </Button>
              <span className="slash">/</span>
              <Button
                onClick={() => handleClick("uz")}
                className="navLink langAtribute"
              >
                UZ
              </Button>
            </Nav> */}

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </div>
  );
};

export default Header;
