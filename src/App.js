import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import Map from './components/Map';
import Select from './components/Select';
import Data from './data';


class App extends Component {
  state = {
    airline: 'all',
    airport: 'all',
  }

  formatData(property, value) {
    if (property === 'airline') {
      return Data.getAirlineById(value).name;
    } else {
      return Data.getAirportByCode(value).name;
    }
  }

  filterRoutesByAirline(route) {
    if (this.state.airline === 'all') {
      return true;
    } else {
      return this.state.airline === route.airline
    };
  }

  filterRoutesByAirport(route) {
    if (this.state.airport === 'all') {
      return true;
    } else {
      return [route.src, route.dest].includes(this.state.airport)
    };
  }

  handleSelectAirline = (e) => {
    let newAirline = e.target.value;
    newAirline = +newAirline || 'all'

    this.setState({ airline: newAirline })
  }

  handleSelectAirport = (e) => {
    let newAirport = e.target.value;
    this.setState({ airport: newAirport })
  }

  showAll = (e) => {
    e.preventDefault();
    this.setState({ airline: 'all', airport: 'all' })
  }

  render() {
    const columns = [
      { name: 'Airline', property: 'airline' },
      { name: 'Source Airport', property: 'src' },
      { name: 'Destination Airport', property: 'dest' },
    ];

    const filteredRoutes = Data.routes.filter(route => {
      return this.filterRoutesByAirline(route) && this.filterRoutesByAirport(route);
    });

    const filteredAirportsByAirline = Data.airports.filter(airport => {
      const code = airport.code;
      return filteredRoutes.some(route => route.src === code || route.dest === code);
    }).map(airport => airport.code);

    const filteredAirlinesByAirport = Data.airlines.filter(airline => {
      const id = airline.id;
      return filteredRoutes.some(route => route.airline === id);
    }).map(airline => airline.id);

    const allShowing = this.state.airline === 'all' && this.state.airport === 'all';

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>

        <section>
          <Map routes={filteredRoutes} airports={Data.airports} />
          <p>
            Show routes on
              <Select options={Data.airlines} valueKey="id" titleKey="name" allTitle="All Airlines"
              value={this.state.airline}
              onSelect={this.handleSelectAirline}
              filtered={filteredAirlinesByAirport}
            />
            flying in or out of
            <Select options={Data.airports} valueKey="code" titleKey="name" allTitle="All Airports"
              value={this.state.airport}
              onSelect={this.handleSelectAirport}
              filtered={filteredAirportsByAirline}
            />
            <button disabled={allShowing} onClick={this.showAll}>Show All Routes</button>
          </p>


          <Table className="routes-table" columns={columns} rows={filteredRoutes} format={this.formatData} />
        </section>
      </div>
    );
  }
}

export default App;