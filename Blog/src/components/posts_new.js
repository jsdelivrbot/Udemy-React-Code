import React , { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    //handlesubmit validates the form
    const {fields : { title,categories,content}, handleSubmit } = this.props;
    //same as const handleSubmit = this.props.handleSubmit;
    //also const title = this.props.fields.title
    //the title variable here is a complete text field..
    return (
      <div>
        <form onSubmit={ handleSubmit(this.props.createPost) }>
          <h3>Create New Post</h3>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title}></input>
            <div className="text-help">
              {title.touched ? title.error: ''}
            </div>
          </div>
{/* doing {...title} appends all of titles properties to the input field. So its like input has all the props itself. We are using
the props given to us by redux form */}
          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control" {...categories}></input>
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea type="text" className="form-control" {...content}></textarea>
          </div>

          <button type="submit" className="btn btn-primary" >submit</button>
        </form>

      </div>
    )

  }
}

function validate(values ){
  const errors = {};

  if(!values.title){
    errors.title = 'Enter a Title';//of key in error obj matches the key in fields and has truthy value, redux form wont allow  to submit

  }

  return errors;
}


export default reduxForm({
  form : 'PostsNew',//name of form.. can be anything.. just be unique
  fields : ['title','categories','content'],//fields in form
  validate //validate fn created above
}, null , { createPost })(PostsNew);
//above line is similar to connect with one extra param

//redux form holds the state of the form
//above forms is added to state as below.. So key has to be unique as shown below
//state = {
//form: {  -> form is the key we added in reducer file
//PostsNewForm : {
//title: '...', -> what ever use types
//categories:'...'
//content : '....'
//}
//}
