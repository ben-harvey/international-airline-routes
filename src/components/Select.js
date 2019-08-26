import React, { Component } from 'react';

class Select extends Component {


  render() {
    const valueKey = this.props.valueKey;
    const options = this.props.options.map(option => {
      const key = option[valueKey];

      return (
        <option
        key={key}
        value={key}
        >
          {option[this.props.titleKey]}
        </option>
      )
    });

    return (
      <select onChange={this.props.onSelect} value={this.props.value}>
        <option value="all">{this.props.allTitle}</option>
        {options}
     </select>
    )
  }
}

export default Select;