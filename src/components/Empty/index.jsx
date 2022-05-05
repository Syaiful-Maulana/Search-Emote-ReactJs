import React from 'react';
import styles from './empty.module.css';
import PropTypes from 'prop-types';

function index({ text }) {
  return <div className={styles.empty}>{text}</div>;
}

index.propTypes = {
  text: PropTypes.string.isRequired,
};
export default index;
