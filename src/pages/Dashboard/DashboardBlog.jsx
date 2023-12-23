import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/actions";
import BlogCard from '../../components/Dashboard/BlogCard/BlogCard';



const DashboardBlog = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state);
    
    useEffect(() => {
      dispatch(getAllPosts());
    }, []);
    console.log(posts);

  return (
    <div>
      <h1>Dashboard Blog</h1>
      {posts?.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default DashboardBlog