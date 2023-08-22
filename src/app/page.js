"use client"
import React, { useEffect, useState } from 'react'
import { API_URL } from './constant';

const HomePage = () => {
  const [categoryData, setCategoryData] =  useState([]);
  const [newestPost, setNewestPost] =  useState([]);
  const [blogData, setBlogData] =  useState([]);

  useEffect(()=>{
    const  getCategoryData = async ()=> {
      try{
        const res = await fetch(`${API_URL}/post-categories`, {
          cache: "no-store",
        });
        const data = await res.json();
        setCategoryData(data);
        console.log(data);
      } catch (err){
        console.error(error);
      }
    };

    const getNewestPost = async ()=> {
      try{
        const res = await fetch(`${API_URL}/post-newest`, {
          cache: "no-store",
        });
        const data = await res.json();
        setNewestPost(data);
        console.log(data);
      } catch (err){
        console.error(error);
      }
    };

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

    getCategoryData();
    getNewestPost();
    getBlogData();
  },[]);

  return (
    <div>
      <h1>HomePage</h1>
    </div>
  )
}

export default HomePage