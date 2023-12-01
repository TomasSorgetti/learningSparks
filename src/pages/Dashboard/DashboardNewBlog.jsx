import EditorComponent from "../../components/Dashboard/Editor/EditorComponent";
import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const DashboardNewBlog = () => {
  const [data, setData] = useState({
    text: "",
    image: null,
    card_image: null,
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
    if (data.text && data.card_text && data.card_title) {
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
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <input
        className="w-full h-[440px] bg-gray-300"
        type="file"
        name="image"
        value={data.image}
      />

      <EditorComponent setData={setData} data={data} />
      <section className="flex gap-20 mt-20">
        <div className="blog-card flex flex-col font-poppins blogCard h-[550px] w-[400px] rounded-[10px] bg-subTitleColor text-white">
          <input
            className="w-full h-[450px] bg-gray-300 flex items-center justify-center"
            type="file"
            name="image"
            value={data.image}
            onChange={handleChange}
          />
          <div className="h-full flex flex-col p-6 justify-between text-titleColor">
            <input
              className="card_title_input h-12 rounded text-[2rem] font-semibold text-center"
              type="text"
              name="card_title"
              value={data.card_title}
              onChange={handleChange}
            />
            <ReactQuill
              className="card-quill bg-white h-32 w-full text-[1rem] font-light text-left cursor-text "
              theme="snow" // Puedes cambiar el tema según tus preferencias
              value={data.card_text}
              onChange={(value) => setData({ ...data, card_text: value })}
            />
            <span className="text-center text-buttonColor font-semibold">
              See more
            </span>
          </div>
        </div>
        <div className="blog-card flex flex-col font-poppins blogCard h-[550px] w-[400px] rounded-[10px] bg-subTitleColor text-white">
          <div className="overflow-hidden w-full h-[450px] rounded-t-[10px]">
            <img
              className="w-full object-cover"
              src={
                data.card_image
                  ? data.card_image
                  : "https://www.timeshighereducation.com/student/sites/default/files/istock-499343530.jpg"
              }
              alt={data.card_title}
            />
          </div>
          <div className="h-full flex flex-col items-center justify-between flex-grow py-4 px-8">
            <h3 className="card_title text-[2rem] font-bold text-center h-24 w-11/12">
              {data.card_title}
            </h3>
            <div
              className="card_preview_text w-full text-[1rem] font-light text-left"
              dangerouslySetInnerHTML={{ __html: data.card_text }}
            />
            <span className="mt-auto text-buttonColor font-semibold">
              See more
            </span>
          </div>
        </div>
      </section>
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default DashboardNewBlog;
