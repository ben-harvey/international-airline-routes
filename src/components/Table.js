import React, { Component } from 'react';

class Table extends Component {
  static defaultProps = {
    perPage: 25,
  }

  state = {
    page: 800,
  }

  nextPage = (e) => {
    e.preventDefault();
    this.setState({ page: this.state.page + this.props.perPage})
  }

  prevPage = (e) => {
    e.preventDefault();
    this.setState({ page: this.state.page - this.props.perPage})
  }

  render() {
    const headerTitles = this.props.columns.map(column => (
      <th key={column.name}>{column.name}</th>
    ));

    const page = this.state.page;
    const length = this.props.rows.length;
    const perPage = this.props.perPage;
    const pageLength = page + perPage;

    const bodyRows = this.props.rows.slice(page, page + perPage).map( (row) => {
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
      <div>
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
        <div class="pagination">
          <p>
            Showing {page + 1}-{pageLength > length ? length : pageLength} of {length} routes.
          </p>
          <p>
            <button
              disabled={page === 0}
              onClick={this.prevPage}
            >
              Previous Page
            </button>
            <button
              disabled={page + perPage >= length}
              onClick={this.nextPage}
            >
              Next Page
            </button>
           </p>
        </div>
      </div>
    )
  }

}

export default Table;