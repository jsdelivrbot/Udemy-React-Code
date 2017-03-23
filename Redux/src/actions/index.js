export function selectBook(book){
  // console.log('Book has been selected', book.title);
  // this is an action creator. So it needs to return an action that can be used
  // across the application
  return {
    type : 'BOOK_SELECTED', // this can be a string or a variable.. usualy a constant
    payload : book
  };
}
//action creator..
