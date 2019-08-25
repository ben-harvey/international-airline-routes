import React, { Component } from 'react';
import './App.css';
import {routes, airlines, airports} from './data.js'

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
                <td>{route.airline}</td>
                <td>{route.src}</td>
                <td>{route.dest}</td>
              </tr>
             ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;