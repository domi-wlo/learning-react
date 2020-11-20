import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container.js';
import Icon from '../Icon.js';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={settings.header.icon} />
            </Link>
            <nav>
              <NavLink exact to={settings.homePage.linkTo} activeClassName={settings.className.active}>{settings.homePage.name}</NavLink>
              <NavLink exact to={settings.infoPage.linkTo} activeClassName={settings.className.active}>{settings.infoPage.name}</NavLink>
              <NavLink exact to={settings.faqPage.linkTo} activeClassName={settings.className.active}>{settings.faqPage.name}</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;