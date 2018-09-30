/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectFront = (state) => state.get('front');

const makeSelectUsername = () => createSelector(
  selectFront,
  (state) => state.get('username')
);

export {
  selectFront,
  makeSelectUsername,
};
