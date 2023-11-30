import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import headerImg from "../assets/Blog/blog-header2.png";
import Navigation from "../components/Navigation/Navigation";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import BlogCard from "../components/Dashboard/Card/BlogCard";

const Blog = () => {
    const { t } = useTranslation();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const URL = "http://localhost:3001/posts";
      try {
        await axios.get(URL).then((res) => {
          if (res) {
            setData(res.data);
          }
        });
      } catch (error) {
        console.log("error fetching blogs data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <Navigation t={t} i18n={i18n} />
      <article>
        <img
          className="w-full"
          src={headerImg}
          alt="students watching a computer"
        />
      </article>
      <h1>Blog</h1>
      {data ? (
        data?.map((item) => <BlogCard key={item.id} data={item} />)
      ) : (
        <div>No posts yet</div>
      )}
    </section>
  );
};

export default Blog;
