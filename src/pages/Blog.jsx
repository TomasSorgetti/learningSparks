import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import headerImg from "../assets/Blog/blog-header2.png";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer"
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import BlogCard from "../components/Dashboard/Card/BlogCard";
import { URl_BASE } from "../utils/url";
const Blog = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const URL = `${URl_BASE}/posts`;
      try {
        await axios.get(URL).then((res) => {
          if (res) {
            setData(res.data);
          }
        });
      } catch (error) {
        console.log("error fetching blogs data", error);
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  return (
    <section className="">
      <Navigation t={t} i18n={i18n} />
      <article>
        <img
          className="w-full mt-20"
          src={headerImg}
          alt="students watching a computer"
        />
      </article>
      <h1 className="py-10 text-center font-poppins text-[26px] font-extrabold text-titleColor xl:text-[4rem]">
        Blog
      </h1>
      <div className="p-20 flex flex-wrap gap-6 justify-center">
        {data ? (
          data.map((item) => <BlogCard key={item.id} data={item} />)
        ) : loading ? (
          <div>Loading</div>
        ) : (
          <div>Error. Try again later...</div>
        )}
      </div>
      <Footer t={t} />
    </section>
  );
};

export default Blog;
