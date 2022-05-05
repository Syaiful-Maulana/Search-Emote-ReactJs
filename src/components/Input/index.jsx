import React from 'react';
import styles from './input.module.css';
import PropTypes from 'prop-types';

function index({ onChange, value }) {
  return <input className={styles.input} onChange={onChange} placeholder="Search" value={value} />;
}

index.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default index;
