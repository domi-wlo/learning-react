import {connect} from 'react-redux';
import {getFilteredCards} from '../../redux/cardsRedux.js';
import SearchResults from './SearchResults';
const mapStateToProps = (state, props) => {

  const searchString = props.match.params.searchString;

  return {
    cards: getFilteredCards(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);