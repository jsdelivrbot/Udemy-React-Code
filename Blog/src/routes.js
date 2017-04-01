import React from 'react';
import { Route , IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

// const Greeting = () => {
//   return <div>Hello</div>
// }


//Route config
//IndexRoute means for root path show app and PostsIndex
//For /g1 show App and Greeting, not PostsIndex.
export default (
<Route path="/" component={App} >
  <IndexRoute component={PostsIndex} />
  <Route path="posts/new" component={PostsNew} />
  <Route path="posts/:id" component={PostsShow} />
</Route>
);

{/* <Route path="g1" component={Greeting} />
<Route path="g2" component={Greeting} /> */}
