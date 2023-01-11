import React from "react";
import './App.css';
import Header from "./loyout/Header";
import Main from "./loyout/Main";
import Footer from "./loyout/Footer";

class App extends React.Component{
  render() {
    return (
        <div className='App'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
  }
}
export default App;
