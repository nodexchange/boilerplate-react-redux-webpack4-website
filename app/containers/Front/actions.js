import Scroll from '../../helpers/Scroll';
import { SCROLL, CURRENT_PAGE, MAX_PAGES } from './constants';

export const mainWindowScrollAction = () => ({
  type: SCROLL,
  offsetRatio: Scroll.scrollViewportToOffsetRatio()
});

// eslint-disable-next-line arrow-parens
export const updateMaxPages = (value) => ({
  type: MAX_PAGES,
  maxPages: value
});

// eslint-disable-next-line arrow-parens
export const updateCurrentPage = (value) => ({
  type: CURRENT_PAGE,
  offsetRatio: value
});
