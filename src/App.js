import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import NewsPage from './Pages/News'
import Repairs from './Pages/Repairs'
import NotFound from './Pages/NotFound'
import Contact from './Pages/Contact'
import NewsSingle from './Pages/NewsSingle'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import { Context } from './context/Context'
import Admin from './Pages/Admin'
import Write from "./Pages/Write/Write";
import Structure from "./Pages/Structure";
import EmptyOjbects from "./Pages/EmptyOjbects";
import Administration from "./Pages/Administration";
import Departments from "./Pages/Departments";
import Regionals from "./Pages/Regionals";
import Rent from "./Pages/Rent";
import Opendata from "./Pages/Open-Data";
import Bookreader from './Pages/BookReader'


function App() {
  const { user } = useContext(Context);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/admin">{user ? <Admin /> : <Login />}</Route>
          <Route exact path="/write">{user ? <Write /> : <Login />}</Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/repairs" component={Repairs}></Route>
          <Route exact path="/news" component={NewsPage}></Route>
          <Route exact path="/worker" component={Worker}></Route>
          <Route exact path="/contacts" component={Contact}></Route>
          <Route exact path="/articles" component={NewsSingle}></Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/structure" component={Structure}></Route>
          <Route exact path="/empty_objects" component={EmptyOjbects}></Route>
          <Route exact path="/administration" component={Administration}></Route>
          <Route exact path="/departments" component={Departments}></Route>
          <Route exact path="/regionals" component={Regionals}></Route>
          <Route exact path="/auction" component={Rent}></Route>
          <Route exact path="/openData" component={Opendata}></Route>
          <Route exact path="/book" component={Bookreader}></Route>
          <Route  path="*" component={NotFound}></Route>
        </Switch>
      </Router>

      {/* <Router >
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}></Route>
          <Route path={`${process.env.PUBLIC_URL}/admin`}>{user ? <Admin /> : <Login />}</Route>
          <Route path={`${process.env.PUBLIC_URL}/write`}>{user ? <Write /> : <Login />}</Route>
          <Route path={`${process.env.PUBLIC_URL}/about`} component={About}></Route>
          <Route path={`${process.env.PUBLIC_URL}/services`} component={Services}></Route>
          <Route path={`${process.env.PUBLIC_URL}/repairs`} component={Repairs}></Route>
          <Route path={`${process.env.PUBLIC_URL}/news`} component={NewsPage}></Route>
          <Route path={`${process.env.PUBLIC_URL}/worker`} component={Worker}></Route>
          <Route path={`${process.env.PUBLIC_URL}/contacts`} component={Contact}></Route>
          <Route path={`${process.env.PUBLIC_URL}/articles`} component={NewsSingle}></Route>
          <Route path={`${process.env.PUBLIC_URL}/register`} component={Register}></Route>
        </Switch>
      </Router> */}
    </>
  );


}

export default App;


//   PUBLIC_URL=/test2
//   <Router baseurl="/test2">

//   <IfModule mod_rewrite.c>

//   RewriteEngine On
//   RewriteBase /
//   RewriteRule ^index\.html$ - [L]
//   RewriteCond %{REQUEST_FILENAME} !-f
//   RewriteCond %{REQUEST_FILENAME} !-d
//   RewriteCond %{REQUEST_FILENAME} !-l
//   RewriteRule . test2/index.html [L]

// </IfModule>