import {connect} from 'react-redux';
import {getFilteredCards} from '../../redux/cardsRedux.js';
import SearchResults from './SearchResults';
// import createAction_changeSearchString from '../../redux/searchStringRedux.js';

const mapStateToProps = (state) => {

  const searchString = window.location.pathname.slice(8);

  return {
    cards: getFilteredCards(state, searchString),
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
// });

export default connect(mapStateToProps)(SearchResults);