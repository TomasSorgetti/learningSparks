import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { URl_BASE } from "../../utils/url";

const DashboardCreateUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = `${URl_BASE}/user`;
    if (
      form.name &&
      form.email &&
      form.password &&
      form.password === form.repeatPassword
    ) {
      try {
        await axios.post(URL, form).then((response) => {
          if (response) {
            navigate("/dashboard");
          }
        });
      } catch (error) {
        console.log("error login", error);
      }
    }
  };
  return (
    <section className="w-full h-[100dvh] flex items-center justify-center text-white font-poppins">
      <form
        onSubmit={handleSubmit}
        className="bg-subTitleColor w-[524px] h-[690px] px-16 py-10 rounded-2xl text-center flex flex-col justify-between items-center"
      >
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-[2.5rem] font-semibold">Create user</h1>
          <div className="flex flex-col gap-1 text-left">
            <label className="font-semibold text-[1.125rem]" htmlFor="">
              Name
            </label>
            <input
              className="w-full h-16 rounded-md text-subTitleColor px-4"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 text-left">
            <label className="font-semibold text-[1.125rem]" htmlFor="">
              Email
            </label>
            <input
              className="w-full h-16 rounded-md text-subTitleColor px-4"
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 text-left">
            <label className="font-semibold text-[1.125rem]" htmlFor="">
              Password
            </label>
            <input
              className="w-full h-16 rounded-md text-subTitleColor px-4"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 text-left">
            <label className="font-semibold text-[1.125rem]" htmlFor="">
              Repeat password
            </label>
            <input
              className="w-full h-16 rounded-md text-subTitleColor px-4"
              type="password"
              name="repeatPassword"
              value={form.repeatPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <Link to="/dashboard">You already have account?</Link>
        <button className="bg-buttonColor text-[1.5rem] font-semibold px-6 py-2 w-32 rounded-full">
          Create
        </button>
      </form>
    </section>
  );
};

export default DashboardCreateUser;
