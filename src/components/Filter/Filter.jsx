import React, { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  render() {
    const { inputFilter } = this.props;

    return (
      <div className={css.section}>
        <h3 className={css.titleFilter}>Find contacts by name</h3>
        <input
          className={css.input}
          type="text"
          name="filter"
          placeholder="filter by name"
          onChange={inputFilter}
        />
      </div>
    );
  }
}
Filter.propTypes = {
  inputFilter: PropTypes.func,
};
