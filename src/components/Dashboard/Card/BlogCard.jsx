import React from 'react'

const BlogCard = ({data}) => {

  return <div className="blogCard h-60 w-20 bg-blue-400 mt-10" dangerouslySetInnerHTML={{ __html: data.text }} />;
};

export default BlogCard