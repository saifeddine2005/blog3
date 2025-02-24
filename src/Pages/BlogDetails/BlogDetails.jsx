import React from 'react'
import './BlogDetails.css';
import { useParams } from 'react-router-dom';
import { blog_list } from '../../data';
const BlogDetails = () => {
    // get first five blog post
    const fisrtFvieBlog=blog_list.slice(0,5);
    const{id} =useParams();
    //get blog based on id 
    const blog=blog_list.find(blog=>{
        return blog.id===parseInt(id);
    })
  return (
    <div>
     <div className='blog_details'>
      <div className='blog_details_right'>
        <div className='detail_category'><p>{blog.category}</p></div>
        <h2 className='blog_title'>{blog.title}</h2>
        <div className='author_date'>
         <div className='author'>
            <img src={blog.blogDetail.author_image} alt=''/>
            <p>By: {blog.blogDetail.author_name}</p>
            </div>
            <p className='date'>Published on {blog.blogDetail.date}</p>
         </div>
        <img src={blog.blog_image} alt=''/>
        <p className='desc'>{blog.blogDetail.description}</p>
      </div>
      <div className='blog_details_left'>
        <h2>LATEST</h2>
        {fisrtFvieBlog.map((blog)=>{
            return(
                <div className='popular_post'>
                <div className='post'>
                 <img src={blog.blog_image} alt=''/>
                 <h3>{blog.title}</h3>
                 <div className='author_name_date'>
                    <p className='name'>By :<span>{blog.blogDetail.author_name}</span></p>
                    <p className='date_written'>{blog.blogDetail.date}</p>
                 </div>
                </div>
                </div>
            )
        })}
      </div>
     </div>
     <div className='comment'>
        <h2 className='comment_header'>WRITE A COMMENT</h2>
        <form action='#'>
           <div className='comment_details'>
             <input type='text' placeholder='Name'/>
             <input type='email' placeholder='Email'/>
           </div>
           <textarea name='comment' placeholder='write your comment here'></textarea>
           <div className='check'>
            <input type='checkbox'/>
            <label htmlFor='#'>Save my name and email in my browser</label>
           </div>
           <button>Send</button>
        </form>
     </div>
    </div>
  )
}

export default BlogDetails