import React,{createContext,useState} from 'react'

export const BlogContext = createContext();
import {blog_list} from '../../data';
const BlogContextProvider = ({children}) => {
    const[blogs,setBlogs] = useState(blog_list);

  return (
   <BlogContext.Provider value={{blogs}}>
    {children}
   </BlogContext.Provider>
  )
}

export default BlogContextProvider;