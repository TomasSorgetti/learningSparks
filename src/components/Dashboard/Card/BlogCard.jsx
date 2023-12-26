import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

const BlogCard = ({ data, subjects }) => {
  const { card_title, card_image, card_text, id, subjectId } = data;
  return (
    <Link
      to={`/blog/${id}`}
      target="blank"
      className="blog-card rounded-xl flex flex-col font-poppins blogCard h-[550px] w-[400px] bg-white text-subTitleColor"
    >
      <div className="overflow-hidden w-full h-[227px] rounded-t-xl">
        <img
          className="w-full object-cover h-full"
          src={
            card_image
              ? card_image
              : "https://www.timeshighereducation.com/student/sites/default/files/istock-499343530.jpg"
          }
          alt=""
        />
      </div>
      <div className=" flex flex-col items-center justify-between flex-grow py-4 px-8 text-left">
        <div className="w-full flex justify-start">
          <span className="text-[1rem] rounded-full w-auto h-auto px-3 py-1 bg-buttonColor text-white text-center font-bold">
            {subjects?.map(
              (subject) => subject.id === subjectId && subject.subj
            )}
          </span>
        </div>
        <h3 className="text-titleColor text-[2rem] font-bold w-full py-2">
          {card_title}
        </h3>
        <div
          className={`${styles.card_text} font-manrope w-full text-[1rem] font-light text-left text-subTitleColor`}
          dangerouslySetInnerHTML={{ __html: card_text }}
        />
        <span className="mt-auto text-titleColor font-semibold w-full text-left pb-4">
          Read post
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
