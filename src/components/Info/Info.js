import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import { settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={settings.infoPage.title} imageSrc={settings.infoPage.image} />
    <h2>{settings.infoPage.paragraphTitle}</h2>
    <p>{settings.infoPage.paragraphContent}</p>
  </Container>
);

export default Info;