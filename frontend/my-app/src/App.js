import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Results from './components/Results';
import Company from './components/Company';

import { Route, Routes, BrowserRouter, Link, useNavigate} from 'react-router-dom';


function App() {

  const navigate = useNavigate

  const toHome = () => {
    navigate('/')
  }

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/results' exact element={<Results/>} />
          <Route path='/company-profile' exact element={<Company />} />
        </Routes>
      </BrowserRouter>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
