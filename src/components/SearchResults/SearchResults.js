import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon.js';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    icon: PropTypes.string,
    cards: PropTypes.array,
  }

  render() {
    const {cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name='search' /></span>Results</h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;