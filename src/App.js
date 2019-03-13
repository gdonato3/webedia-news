import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class Icons extends Component {
  render (){
    const icons = {
      'pacman': 'M30.148 5.588c-2.934-3.42-7.288-5.588-12.148-5.588-8.837 0-16 7.163-16 16s7.163 16 16 16c4.86 0 9.213-2.167 12.148-5.588l-10.148-10.412 10.148-10.412zM22 3.769c1.232 0 2.231 0.999 2.231 2.231s-0.999 2.231-2.231 2.231-2.231-0.999-2.231-2.231c0-1.232 0.999-2.231 2.231-2.231z'
    };
    return <svg width="22" height="22" viewBox="0 0 32 32">
            <path d={icons[this.props.name]}></path>
          </svg>
  }
}

class Menu extends Component {
  render () {
    return <div className="menu">
      <a>Notícias em Destaque</a>
      <a>Notícias do Brasil</a>
      <a>Notícias dos EUA</a>
      <a>Notícias da Argentina</a>
      <a>Notícias da França</a>
    </div>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <input className="search-input"/>
            {/* <a>
              <Icons name="pacman"/>
            </a> */}
          </div>
        </div>
        <Menu/>
        </header>
      </div>
    );
  }
}

export default App;
