import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import Front from './Work';

import { mainWindowScrollAction, updateCurrentPage, updateMaxPages } from './actions';

const mapDispatchToProps = (dispatch) => ({
  mainWindowScrollAction: (evt) => dispatch(mainWindowScrollAction(evt)),
  updateCurrentPage: (evt) => dispatch(updateCurrentPage(evt)),
  updateMaxPages: (evt) => dispatch(updateMaxPages(evt)),
});
/* eslint-disable */
const mapStateToProps = (state) => {
  // console.log(state.get('scroll'));
  return {
    offsetRatio: state.get('scroll').offsetRatio
  };
};
/* eslint-enable */

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'front', reducer });

export default compose(withReducer, withConnect)(Front);
// export default compose(withReducer)(Front);
export { mapDispatchToProps };
