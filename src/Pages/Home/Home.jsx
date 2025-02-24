import React, { useState } from 'react'
import Hero from '../../Components/Hero/Hero';
import Topic from '../../Components/Topics/Topic';
import BlogList from '../../Components/BlogList/BlogList';

const Home = () => {
  const[category,setCategory]=useState("All");
  return (
    <div>
       <Hero/>
       <Topic category={category} setCategory={setCategory}/>
       <BlogList category={category}/>
    </div>
  )

}
  export default Home;

