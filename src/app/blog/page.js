"use client"
import React, { useEffect, useState } from 'react'
import {API_URL} from "../constant"
const Blog = () => {
  const [blogData, setBlogData] =  useState([]);

  useEffect(()=>{
    const  getBlogData = async ()=> {
      try{
        const res = await fetch(`${API_URL}/post-list/2`, {
          cache: "no-store",
        });
        const data = await res.json();
        setBlogData(data);
        console.log(data);
      } catch (err){
        console.error(error);
      }
    };
    getBlogData();
  },[]);

  return (
    <div>
      Blog page!!!
      <p>this 1</p>
    </div>
  )
}

export default Blog