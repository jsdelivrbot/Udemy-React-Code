import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//reducer returns part of the state.
//the one below return the book data
const rootReducer = combineReducers({
  //this add the state with key books to global
  //application state
    books : BooksReducer,
    activeBook : ActiveBook
});


export default rootReducer;
