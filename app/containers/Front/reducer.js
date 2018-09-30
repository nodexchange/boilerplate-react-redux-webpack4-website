/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { SCROLL, CURRENT_PAGE, MAX_PAGES } from './constants';

// The initial state of the App
const initialState = fromJS({
  offsetRatio: 1,
  maxPages: 7,
  scrollToSection: 0
});

function frontReducer(state = initialState, action) {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case SCROLL:
      return {
        ...state,
        offsetRatio: action.offsetRatio
      };
    case MAX_PAGES:
      return {
        ...state,
        maxPages: action.maxPages
      };
    case CURRENT_PAGE:
      return {
        ...state,
        offsetRatio: action.offsetRatio
      };
    default:
      return state;
  }
}

export default frontReducer;
