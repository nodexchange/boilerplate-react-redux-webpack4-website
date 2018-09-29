import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import Front from './Front';

import { mainWindowScrollAction, updateCurrentPage, updateMaxPages } from './actions';

const mapDispatchToProps = (dispatch) => ({
  mainWindowScrollAction: (evt) => dispatch(mainWindowScrollAction(evt)),
  updateCurrentPage: (evt) => dispatch(updateCurrentPage(evt)),
  updateMaxPages: (evt) => dispatch(updateMaxPages(evt)),
});

const mapStateToProps = (state) => ({
  offsetRatio: state.scroll.offsetRatio
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'front', reducer });

export default compose(withReducer, withConnect)(Front);
// export default compose(withReducer)(Front);
export { mapDispatchToProps };
