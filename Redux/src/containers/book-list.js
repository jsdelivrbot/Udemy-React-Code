import React, {Component} from 'react';

export default class BookList extends Component {

  renderList() {
    //reducer output passed to as props
    //Reducer produces a slice of redux state.
    //passing state to this is merging react and redux
    return this.props.books.map( (book) => {
      return (
        //key required else error.
        <li key="book.title" className="list-group-item">{book.title}</li>
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
