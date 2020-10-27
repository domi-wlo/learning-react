import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img src={props.imageSrc} alt="space" className={styles.image}/>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Hero;