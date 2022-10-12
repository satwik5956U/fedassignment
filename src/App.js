import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {useState} from 'react';

function App() {
  const Usestateclick=()=>{
    return (
      <div>
      <div className='mainpage'>
    <h1>React useState</h1>
    <p>
    useState is a React hook.

A Hook is a special function that lets you “hook into” React features. For example, <span>useState is a Hook that lets you add React state to function components. </span>
You need this hook, every time you are writing a functional component, and you must define some state variables into that component.
    </p>
    <p>
      import {`{`}useState{`}`} from react;<br/>
        function FavoriteColor(){`{`}<br/>
          const [color, setColor] = useState("");<br/>
          return {`<h1>`}My favorite color is {`{`}color{`}`}!{`</h1>`};
          <br/>
          {`}`}
     
    const root = ReactDOM.createRoot(document.getElementById('root'));<br/>
    root.render({`<FavoriteColor />`});
    </p>
    <h1>
      updating a state
    </h1>
    <div className='codediv'>
      {`import { useState } from "react";`}<br/>
      {`import ReactDOM from "react-dom/client";`}<br/>
      {'function FavoriteColor() {'}<br/>
      {`const [color, setColor] = useState("red");`}<br/>
      {`return (`}<br/>
      {`<>
    <h1>My favorite color is {color}!</h1>
    <button
      type="button"
      onClick={() => setColor("blue")}
    >Blue</button>
  </>`}<br/>
  {`)`}<br/>
  {`}`}<br/>
const root = ReactDOM.createRoot(document.getElementById('root'));<br/>
root.render({`<FavoriteColor />`});
</div>
    <h1>
      What can state hold?
    </h1>
    <p>
    The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

We could create multiple state Hooks to track individual values.
    </p>
    <h1>
      Examples:
    </h1>
    <h3>
      create multiple state Hooks
    </h3>
    <div className='codediv'>
    {`import { useState } from "react";`}<br/>
{`import ReactDOM from "react-dom/client";`}<br/>

{`function Car() {`}<br/>
  {`const [brand, setBrand] = useState("Ford");`}<br/>
  {`const [model, setModel] = useState("Mustang");`}<br/>
  {`const [year, setYear] = useState("1964");`}<br/>
  {`const [color, setColor] = useState("red");`}<br/>

  {`return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )`}<br/>
{`}`}<br/>

{`const root = ReactDOM.createRoot(document.getElementById('root'));`}<br/>
{`root.render(<Car />);`}
    </div>
    <h1>Updating Objects and Arrays in State</h1>
    <p>
    When state is updated, the entire state gets overwritten.

What if we only want to update the color of our car?

If we only called setCar{`({color: "blue"})`}, this would remove the brand, model, and year from our state.

We can use the JavaScript spread operator to help us.
    </p>
    <h2>
      Example
    </h2>
    <h3>
    Use the JavaScript spread operator to update only the color of the car:
    </h3>
    <div className='codediv'>
    {`import { useState } from "react";`}<br/>
{`import ReactDOM from "react-dom/client";`}<br/>

{`function Car() {`}<br/>
  {`const [car, setCar] = useState({`}<br/>
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  {`});`}<br/>

  {`const updateColor = () => {`}<br/>
  {`  setCar(previousState => {
      return { ...previousState, color: "blue" }
    });`}<br/>
  {`}`}<br/>

  {`return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )`}<br/>
{`}`}<br/>

{`const root = ReactDOM.createRoot(document.getElementById('root'));`}<br/>
{`root.render(<Car />);`}<br/>
    </div>
    <br/>
    <br/>
    <p>
    Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.

We then return an object, spreading the previousState and overwriting only the color.
    </p>
      </div>
      <Footer/>
      </div>
    )
    }
  const Home=()=>{
    return (

      <div>
  
    <div className="mainpage">
      this is home page
      <Footer/>
    </div>
    
      </div>
      )
  }
  const About=()=>{
    return (

      <div>
  
    <div className="mainpage">
      this is about page
      <Footer/>
    </div>
      </div>
      )
  }
  const Portfolio=()=>{
    return (

      <div>
  
    <div className="mainpage">
      this is porfolio page
      <Footer/>
    </div>
    
      </div>
      )
  }
  const Contact=()=>{
    return (

      <div>
  
    <div className="mainpage">
      this is contacts page
      <Footer/>
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
    </div>
    </Router>
    </div>
  );
}

export default App;
