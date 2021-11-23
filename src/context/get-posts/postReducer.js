import { FETCH_POSTS_SUCCESS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
