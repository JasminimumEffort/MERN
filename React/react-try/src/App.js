import logo from './logo.svg';
import { Component } from "react";
import styled from "styled-components";
import doxxMeQA from './doxxMeQa.jsx';
import './App.css';


// const Styles = styled.div`
//   .p {
//     background-color: #222;
//     font-size: 15px;
//   }
// `;

const App = () => {
  return (
    <doxxMeQA />
  );
}

export default App;



// export default doxxMeQA;

// class SomeComponent extends Component {
//   render() {
//     return(
//       <div>
//       <h2>This is embarrassing</h2>
//       <p>I cannot believe someone would write this</p>
//       </div>  
//     );
//   }
// }

// export default SomeComponent;


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
