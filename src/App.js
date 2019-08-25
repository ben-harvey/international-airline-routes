import React, { Component } from 'react';
import './App.css';
import {
  routes,
  airlines,
  airports,
  getAirportByCode,
  getAirlineById,
} from './data.js'

class App extends Component {
  render() {
    return (
      <div>
        <table class="routes-table">
            <thead>
              <tr>
                <th>Airline</th>
                <th>Source Airport</th>
                <th>Destination Airport</th>
              </tr>
            </thead>
            <tbody>
              {routes.map(route => (
              <tr >
                <td>{getAirlineById(route.airline)}</td>
                <td>{getAirportByCode(route.src)}</td>
                <td>{getAirportByCode(route.dest)}</td>
              </tr>
             ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;