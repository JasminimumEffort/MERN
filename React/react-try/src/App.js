
// import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Col, Container, Nav, Row,
} from 'react-bootstrap';
import DoxxMeQA from './doxxMeQa';
import Somefunc from "./newFunction";
import MyComponent from "./mycomponent";
import TrueFalse from "./states/TrueFalse";
import Counter from "./states/Counter";
import LoginControl from "./Components/loginControl";
import SubContent from "./states/subcontent";
import ProductManage from "./Components/productManage";
import EmployeeInfo from "./API/EmployeeInfo";
import GetFilm from "./API/FilmRequest";
import SearchFilm from "./API/FilmSearch";
import GetFilms from "./API/GetFilms";
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';
import './App.css';
import ErrorPage from "./Components/Routing/404Page";
import HomePage from "./Components/Routing/HomePage";
import UsersPage from "./Components/Routing/UsersPage";
import ContactPage from "./Components/Routing/ContactPage";
import Navigation from './Components/Routing/Navigation';
import UserParams from './Components/Routing/UserParams';


// const Styles = styled.div`
//   .p {
//     background-color: #222;
//     font-size: 15px;
//   }
// `;

function App() {
  return (
    <div className="App">
    {/* <Somefunc/>
    
    <MyComponent/>
    <TrueFalse/> */}
    {/* <DoxxMeQA/>*/}
    {/* <Counter/>  */}
     {/* <SubContent/> */}
    {/* <LoginControl/> */}
     {/* <ProductManage/> */}
    {/* <EmployeeInfo /> */}
    {/* <GetFilm/>
    <SearchFilm/> */}
    <Router>
    <nav>
        <header>
          <h1>EVERYBODY LOVES REACT</h1>
        </header>
          <Link to="/ProductManage">
          <button type="button">Do not click (Product Management)</button>
          </Link>
          <Link to="/GetFilm">
            <button type="button">Click here to look for a specific film</button>
          </Link>
          <Link to="/SearchFilm">
          <button type="button">Search Films</button>
          </Link>
          <br/>
          <Link to="/SubContent">
          <button type="button">SubContent</button>
          </Link>
          <Link to="/LoginControl">
            <button type="button">Test Log In</button>
          </Link>
          <Link to="/EmployeeInfo">
          <button type="button">Employee Info</button>
          </Link>
          <br/>
          <Link to="/TrueFalse">
          <button type="button">TrueFalse</button>
          </Link>
          <Link to="/DoxxMeQA">
            <button type="button">DoxxMeQA</button>
          </Link>
          <Link to="/Counter">
          <button type="button">Counter</button>
          </Link>
          <br/>
          <Link to="/home">
          <button type="button">Home</button>
          </Link>
          <Link to="/contact">
            <button type="button">Contact Us</button>
          </Link>
          <Link to="/users">
          <button type="button">Users</button>
          </Link>
          <Link to="/404">
            <button type="button">Click here to see dogs</button>
          </Link>
          <br/>
          <Navigation />
        </nav>
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/404" element={<ErrorPage/>} />
          <Route path="/UserParams/:id" element={<UserParams/>}/>
          <Route path="/TrueFalse" element={<TrueFalse />} />
          <Route path="/DoxxMeQA" element={<DoxxMeQA/>} />
          <Route path="/Counter" element={<Counter/>}/>
          <Route path="/SubContent" element={<SubContent/>} />
          <Route path="/LoginControl" element={<LoginControl/>} />
          <Route path="/EmployeeInfo" element={<EmployeeInfo/>}/>
          <Route path="/ProductManage" element={<ProductManage/>} />
          <Route path="/GetFilm" element={<GetFilm/>} />
          <Route path="/SearchFilm" element={<SearchFilm/>}/>
          <Route path="/GetFilms/:id" element={<GetFilms/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;



// export default doxxMeQA;




/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NAWW, I won't
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don't learn React on an LOD
        </a>
            
      </header>
    </div>
  );
}

export default App; */
