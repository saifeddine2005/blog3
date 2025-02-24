import React from 'react'
import {blog_topic} from '../../data';
import './Topic.css';
const Topic = ({category,setCategory}) => {
  return (
    <div>
     <div className='topic'>
      <h1>Here Are Various Topics</h1>
      <div className='topic_list'>
       {blog_topic.map((item,index)=>{
        return (
            <div onClick={()=>setCategory((prev)=>(prev===item.blog_title ? "All" : item.blog_title))}
            key={index} className='topic_list_item'>
            <div className={category === item.blog_title ? "active" : ""}>
            <div className='name'>
               <p>{item.blog_title}</p>
             </div>
            </div>
             
            </div>
        )
       })}
      </div>
     </div>
    </div>
  )
}

export default Topic