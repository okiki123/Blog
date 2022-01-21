import React from 'react';
import './post.css'
const Post = () => {
  return (
  <div className='post'>
      <img className='postImg' src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg' alt='' />
      <div className='postInfo'>
          <div className='postCats'>
              <span className='postCat'>Music</span>
              <span className='postCat'>Life</span>
          </div>
          <span className='postTitle'>Proident aliquip dolor minim nulla unt </span>
          <hr/>
          <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>Enim consectetur magna voluptate officia excepteur. Commodo cupidatat nulla incididunt pariatur. Sint officia duis excepteur sunt aute id sint mollit dolore ipsum eu. Est dolor magna fugiat pariatur adipisicing Lorem. Laborum nostrud esse do ex aliqua sit incididunt voluptate.</p>
  </div>);
};

export default Post;
