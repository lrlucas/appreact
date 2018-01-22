import React, { Component } from 'react';
import  WeatherLocations  from './components/weatherLocation'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <WeatherLocations></WeatherLocations>

      </div>
    );
  }
}

export default App;
