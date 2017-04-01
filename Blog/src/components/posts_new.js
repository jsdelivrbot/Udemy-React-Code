import React , { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

//below contextTypes is an object in postsnew class.
//we can use like Postsnew.contextTypes
  static contextTypes = {
    router : PropTypes.object
  };
   onSubmit(props){
     //action creator createPost returns a promise. Normally this is
     //resolved by react router and handed to reducer. Here we dont have a
     //custom reducer, but uses the react form reducer. So handle the return
     //from form submit Here
     this.props.createPost(props)
      .then( () => {
        this.context.router.push('/');
      });
   }
  render() {
    //handlesubmit validates the form
    //binding the call back to this. and pass the props to the fn. and inside that fn call the action creator
    const {fields : { title,categories,content}, handleSubmit } = this.props;
    //same as const handleSubmit = this.props.handleSubmit;
    //also const title = this.props.fields.title
    //the title variable here is a complete text field..
    return (
      <div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <h3>Create New Post</h3>
          <div className={`form-group  ${title.touched && title.invalid? 'has-danger' : ''}`}>
            <label>Title</label>
            <input type="text" className="form-control" {...title}></input>
            <div className="text-help">
              {title.touched ? title.error: ''}
            </div>
          </div>
{/* doing {...title} appends all of titles properties to the input field. So its like input has all the props itself. We are using
the props given to us by redux form */}
          <div className={`form-group  ${categories.touched && categories.invalid? 'has-danger' : ''}`}>
            <label>Categories</label>
            <input type="text" className="form-control" {...categories}></input>
            <div className="text-help">
              {categories.touched ? categories.error: ''}
            </div>
          </div>

          <div className={`form-group  ${content.touched && content.invalid? 'has-danger' : ''}`}>
            <label>Content</label>
            <textarea type="text" className="form-control" {...content}></textarea>
            <div className="text-help">
              {content.touched ? content.error: ''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary" >submit</button>

          <Link to= "/" className="btn btn-danger" >Cancel</Link>
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

  if(!values.categories) {
    errors.categories = "Enter a category";
  }

  if(!values.content){
    errors.content = "Enter content";
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
