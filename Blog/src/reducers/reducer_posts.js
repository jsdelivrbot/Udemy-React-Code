import { FETCH_POSTS} from '../actions/index';

const INITIAL_STATE = { all : [] , post : null };

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case FETCH_POSTS :
    //append data frmo action to state.. es6 syntax
    //note we are returning a new state .. not maniulating existng state
      return { ...state , all: action.payload.data}
    default :
      return state;
  }
}
