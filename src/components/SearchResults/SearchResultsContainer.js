import {connect} from 'react-redux';
import {getFilteredCards} from '../../redux/cardsRedux.js';
import SearchResults from './SearchResults';
import {
  getSearchString,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  cards: getFilteredCards(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);