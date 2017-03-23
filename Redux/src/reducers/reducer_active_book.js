export default function(state = null, action) {
  //sttate initalized to avoid returning undefined during first call
  //Can also set state to {}. 
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}
