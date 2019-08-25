import React, { Component } from 'react';
import './App.css';
import Table from './components/Table'
import {
  routes,
  airlines,
  airports,
  getAirportByCode,
  getAirlineById,
} from './data'



class App extends Component {
  formatData (property, value) {
    if (property === 'airline') {
      return getAirlineById(value);
    } else {
      return getAirportByCode(value);
    }
  }

  render() {
    const columns = [
      {name: 'Airline', property: 'airline'},
      {name: 'Source Airport', property: 'src'},
      {name: 'Destination Airport', property: 'dest'},
    ];

    return (
      <Table className="routes-table" columns={columns} rows={routes} format={this.formatData} />
    );
  }
}

export default App;