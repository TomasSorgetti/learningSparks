import EditorComponent from "../../components/Dashboard/Editor/EditorComponent";
import axios from "axios";
import React, { useState } from "react";
import BlogCard from "../../components/Dashboard/Card/BlogCard";

const DashboardNewBlog = () => {
  const [data, setData] = useState({
    text: "",
    image: "",
    card_image: "",
    card_title: "",
    card_text: "",
  });
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setData({ ...data, [property]: value });
  };
  const token = localStorage.getItem("token");
  const handleSend = async () => {
    const URL = "http://localhost:3001/posts";
    try {
      await axios
        .post(URL, data, {
          headers: {
            authorization: `${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log("error at create post", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <input type="file" name="image" value={data.image} />
      <EditorComponent setData={setData} data={data} />
      <section className="flex gap-20">
        <div className="flex flex-col">
          <input
            type="file"
            name="image"
            value={data.image}
            onChange={handleChange}
          />
          <input
            type="text"
            name="card_title"
            value={data.card_title}
            onChange={handleChange}
          />
          <textarea
            name="card_text"
            value={data.card_text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <img src={data.card_image} alt={data.card_title} />
          <h3>{data.card_title}</h3>
          <p>{data.card_text}</p>
        </div>
      </section>
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default DashboardNewBlog;
