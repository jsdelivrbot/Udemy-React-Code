import { FETCH_WEATHER } from '../actions/index';

export default function(state = [] , action){
  switch(action.type) {
    case FETCH_WEATHER :
    //cannot do state.push to add new city data array to state
    //this will mutate the state which we shouldnt do..instead add
    //to existing state
      // return state.concat([ action.payload.data ]);
      //same as above .. bt in es6
      return [action.payload.data, ...state]
  }
  return state;
}
