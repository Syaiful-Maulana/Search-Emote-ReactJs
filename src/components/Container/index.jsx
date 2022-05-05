import React from 'react';
import styles from './container.module.css';
import PropTypes from 'prop-types';

function index({ children }) {
  return <section className={styles.container}>{children}</section>;
}

index.propTypes = {
  children: PropTypes.node,
};

export default index;
