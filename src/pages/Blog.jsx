import React, { useState } from "react";
import { useEffect } from "react";
import headerImg from "../assets/Blog/blog-header2.png";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import BlogCard from "../components/Dashboard/Card/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { searchSubjects, searchPosts } from "../redux/actions/index";
import loop from "../assets/Icons/loop.png"

const Blog = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { subjects, posts } = useSelector((state) => state);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("all");

  useEffect(() => {
    if (subjects.length === 0) {
      dispatch(searchSubjects());
    }
  }, []);
  useEffect(() => {
    try {
      dispatch(searchPosts(search, subject)).then(() => {
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, [search, subject]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const changeSubject = (prop) => {
    setSubject(prop);
  };

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
      <h1 className="text-center font-extrabold text-[3rem] text-titleColor py-6 mt-8">
        Search for a post
      </h1>
      <article className=" flex justify-center ">
        <div className="relative w-[378px] h-[56px]">
          <input
            className="border-[1px] border-black rounded-md w-full h-full px-4"
            onChange={handleSearch}
            placeholder="Search by title..."
            name="search"
            value={search}
            type="text"
          />
          <img
            className="absolute right-5 top-4"
            src={loop}
            alt="search icon"
          />
        </div>
      </article>
      <section className="py-20 relative flex w-full justify-between">
        <aside className="sticky top-[82px] left-0 bg-titleColor text-white w-[320px] p-6 rounded-tr-xl rounded-br-xl shadow-2xl h-[700px]">
          <h3 className="text-center pb-6 text-[2rem] font-bold">Menu</h3>
          <ul className="flex flex-col gap-2 text-[1.1rem]">
            <li
              className={`${subject === "all" ? "font-bold" : " ml-5"}`}
              onClick={() => changeSubject("all")}
            >
              All subjects
            </li>
            {subjects?.map(({ id, subj }) => (
              <li
                key={id}
                className={`${subject === subj ? "font-bold" : " ml-5"}`}
                onClick={() => changeSubject(subj)}
              >
                {subj}
              </li>
            ))}
          </ul>
        </aside>
        <div className="w-[60%] flex flex-wrap gap-14 justify-center">
          {posts.length !== 0 &&
            posts.map((item) => (
              <BlogCard key={item.id} data={item} subjects={subjects} />
            ))}
          {loading ? (
            <span>Loading...</span>
          ) : (
            posts.length === 0 && <span>No posts yet</span>
          )}
        </div>
      </section>
      <Footer t={t} />
    </section>
  );
};

export default Blog;
