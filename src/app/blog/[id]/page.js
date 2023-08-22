"use client"
import { API_URL } from "../../constant";
import React, { useEffect, useState } from 'react'

const SingleBlog = ({params}) => {
 const [blogData, setBlogData] =  useState();
 useEffect(()=>{
  const getData = async ()=> {
    try{
      const res = await fetch(`${API_URL}/post-details/${params.id}`, {
        cache: "no-store",
      });
      const data = await res.json();
      setBlogData(data.postDetails);
      console.log(data.postDetails);
    } catch (err){
      console.log(err);
    }
  };
  getData();
},[]);

  return (
    <div>
        SingleBlog
        {params.id}
    </div>
  )
}

export default SingleBlog