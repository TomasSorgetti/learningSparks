import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css"



const BlogCard = ({ data }) => {
  const { card_title, card_image, card_text, id } = data;

  return (
    <Link
      to={`/blog/${id}`}
      target="blank"
      className="blog-card flex flex-col font-poppins blogCard h-[550px] w-[400px] rounded-[10px] bg-subTitleColor text-white"
    >
      <div className="overflow-hidden w-full h-[500px] rounded-t-[10px]">
        <img
          className="w-full object-cover"
          src={
            card_image
              ? card_image
              : "https://www.timeshighereducation.com/student/sites/default/files/istock-499343530.jpg"
          }
          alt=""
        />
      </div>
      <div className="h-full flex flex-col items-center justify-between flex-grow py-4 px-8">
        <h3 className="text-[2rem] font-bold text-center h-24">{card_title}</h3>
        <div
          className={`${styles.card_text} w-full text-[1rem] font-light text-left`}
          dangerouslySetInnerHTML={{ __html: card_text }}
        />
        <span className="mt-auto text-buttonColor font-semibold">See more</span>
      </div>
    </Link>
  );
};

export default BlogCard;
