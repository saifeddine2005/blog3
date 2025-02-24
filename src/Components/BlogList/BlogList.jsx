import React, { useContext } from 'react'
import { BlogContext } from '../BlogContext/BlogContext';
import Blog from  '../Blog/Blog';
import { Link } from 'react-router-dom';
const BlogList = ({category}) => {
  const {blogs} = useContext(BlogContext);
  return (
    <div>
      <div className='blog'>
         <div className='blog_items'>
               {blogs.map((blog)=>{
                if(category === "All" || category === blog.category){
                  return(
                    <Link to={`/blog/${blog.id}`}>
                          <Blog blog={blog}/>
                    </Link>
                
                  )
                }return null;
               })}
         </div>
      </div>
    </div>
  )
}

export default BlogList