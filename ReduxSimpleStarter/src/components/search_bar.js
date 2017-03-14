//Paranthesis for non default export
import React, {Component} from 'react';

//functional component
// const SearchBar = () => {
//   return <input />
// };

//create a class based component based on React component
//class SearchBar extends React.Component. instead we can import component
//as well from react above, and just use component
class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {term:''};//can be empty object or a obj with props
  }

  render() {
    return (
      <div>
      <input
          value={this.state.term}
         onChange={ (e) => this.setState({term: e.target.value}) } />
    </div>
    );
  }

//used arrow function instead of this
  // onInputChange(event){
  //   console.log(event.target.value);
  // }


}

export default SearchBar;
