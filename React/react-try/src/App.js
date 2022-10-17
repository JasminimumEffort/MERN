
// import styled from "styled-components";
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
import './App.css';


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
    {/* <ProductManage/>
    <EmployeeInfo /> */}
    {/* <GetFilm/> */}
    <SearchFilm/>
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
