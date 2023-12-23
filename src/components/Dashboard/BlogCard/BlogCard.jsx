import React from 'react'

const BlogCard = ({post}) => {
    const fecha = new Date(post.createdAt);
    const date = `${fecha.getDate()}/${
      fecha.getMonth() + 1
    }/${fecha.getFullYear()}`;
  return (
    <div>
      <h3>{post.card_title}</h3>
      <p>{date}</p>
    </div>
  );
}

export default BlogCard