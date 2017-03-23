import React, {Component} from 'react';
import  {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

 class BookList extends Component {

  renderList() {
    //reducer output passed to as props
    //Reducer produces a slice of redux state.
    //passing state to this is merging react and redux
    return this.props.books.map( (book) => {
      return (
        //key required else error.
        <li
          onClick = { () => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">
          {book.title}</li>
      );
    })
  }//end of function renderList

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}//end of class

//takes app state .. the array of books and current book
//and link it as props inside BookList
//so whatever is returned is put in props..
function mapStateToProps(state){
  return {
    //key as books as we refer this.props.books above
    books : state.books
  };
}

//anything returned from this fn will end as props in booklist container
//same as above
function mapDispatchToProps(dispatch){
  //when ever slect book is called, result should be passed to
  //all reducers. Thats what bindActionCreators do below.
  return bindActionCreators( {selectBook : selectBook}, dispatch );
}

//Promote booklist from a component to container
export default connect(mapStateToProps , mapDispatchToProps)(BookList);
