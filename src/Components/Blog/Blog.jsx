import React from 'react'
import { CiClock2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { MdOutlineArrowOutward } from 'react-icons/md';
import './Blog.css';
const Blog = ({blog}) => {
  const{blog_image,title,category}=blog;

  return (
    <div>
      <div className='item'>
       <img  src={blog_image} alt=''/>
       <div className='info'>
        <div className='category'>
          <p># {category}</p>
        </div>
        <h4>{title}</h4>
        <div className='detail'>
        <p><CiClock2 className='icon'/>3 mins read</p>
        <p> <FaEye className='icon' /> 10K views</p>
        </div>
        <h3>Read More <MdOutlineArrowOutward/></h3>
       </div>
      </div>
    </div>
  )
}

export default Blog