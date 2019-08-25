import React, { Component } from 'react';

class Table extends Component {
  render() {
    const headerTitles = this.props.columns.map(column => (
      <th key={column.name}>{column.name}</th>
    ));

    debugger;

    const bodyRows = this.props.rows.map( (row) => {
      const rows = this.props.columns.map( (col) => {
        const value = row[col.property];
        return <td key={col.property + value}>{ this.props.format(col.property, value) }</td>
      });

      return (
        <tr key={Object.values(row).join(':')}>
          { rows }
        </tr>
      )
    });

    return (
      <table class="routes-table">
          <thead>
            <tr>
              {headerTitles}
            </tr>
          </thead>
          <tbody>
            {bodyRows}
        </tbody>
      </table>
    )
  }

}

export default Table;