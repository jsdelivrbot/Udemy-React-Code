import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//reducer returns part of the state.
//the one below return the book data
const rootReducer = combineReducers({
    books : BooksReducer
});

export default rootReducer;
