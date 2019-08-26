import React, { Component } from 'react';
import './App.css';
import Table from './components/Table'
import Select from './components/Select'
import Data from './data'


class App extends Component {
  state = {
    airline: 'all',
    airport: 'all',
  }

  formatData (property, value) {
    if (property === 'airline') {
      return Data.getAirlineById(value);
    } else {
      return Data.getAirportByCode(value);
    }
  }

  filterRoutesByAirline (route) {
    if (this.state.airline === 'all') {
      return true;
    } else {
      return this.state.airline === route.airline;
    };
  }

  filterRoutesByAirport (route) {
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
    this.setState({ airline: 'all', airport: 'all'})
  }

  render() {
    const columns = [
      {name: 'Airline', property: 'airline'},
      {name: 'Source Airport', property: 'src'},
      {name: 'Destination Airport', property: 'dest'},
    ];

    const filteredRoutes = Data.routes.filter(route => {
      return this.filterRoutesByAirline(route) && this.filterRoutesByAirport(route);
    });

    const allShowing =  this.state.airline === 'all' && this.state.airport === 'all';

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>

        <section>
          <p>
            Show routes on
            <Select options={Data.airlines} valueKey="id" titleKey="name" allTitle="All Airlines"
              value={this.state.airline}
              onSelect={this.handleSelectAirline}
            />
            flying in or out of
            <Select options={Data.airports} valueKey="code" titleKey="name" allTitle="All Airports"
              value={this.state.airport}
              onSelect={this.handleSelectAirport}
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