import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import { settings } from '../../data/dataStore';
import styles from './FAQ.scss';

const FAQ = () => (
  <Container>
    <Hero imageSrc={settings.faqPage.image} />
    <h2 className={styles.title}>{settings.faqPage.title}</h2>
    <p>{settings.faqPage.paragraphContent}</p>
  </Container>
);

export default FAQ;