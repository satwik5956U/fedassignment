import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  const Usestateclick=()=>{
    return (

      <div>
  
    <div className="article">
      this is usestate page
    </div>
      </div>
      )
  }
  const Home=()=>{
    return (

      <div>
  
    <div className="article">
      this is home page
    </div>
      </div>
      )
  }
  const About=()=>{
    return (

      <div>
  
    <div className="article">
      this is about page
    </div>
      </div>
      )
  }
  const Portfolio=()=>{
    return (

      <div>
  
    <div className="article">
      this is porfolio page
    </div>
      </div>
      )
  }
  const Contact=()=>{
    return (

      <div>
  
    <div className="article">
      this is contacts page
    </div>
      </div>
      )
  }
  return (
    <div className="App">
    <Router>
    <div className="wrapper">
      <Header />
        <Route exact path="/" component={Main}/>
        <Route path="/usestate" component={Usestateclick}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Portfolio}/>
        <Route path="/clients" component={Contact}/>
        <div className='pakkakipo'>
          <Sidebar/>
        </div>
      <Footer />
    </div>
    </Router>
    </div>
  );
}

export default App;
