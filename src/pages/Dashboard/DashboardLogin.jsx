import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { URl_BASE } from "../../utils/url";

const DashboardLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = `${URl_BASE}/user/dashboard/login`;
    if (form.email && form.password) {
      try {
        await axios.post(URL, form).then((response) => {
          const token = response.data.token;
          localStorage.setItem("token", token);
          navigate("/home");
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
        className="bg-subTitleColor w-[524px] h-[647px] px-16 py-10 rounded-2xl text-center flex flex-col justify-between items-center"
      >
        <div className="w-full flex flex-col gap-6">
          <h1 className="text-[2.5rem] font-semibold">Login</h1>
          <div className="flex flex-col gap-1 text-left">
            <label className="font-semibold text-[1.125rem]" htmlFor="">
              Email:
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
              Password:
            </label>
            <input
              className="w-full h-16 rounded-md text-subTitleColor px-4"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <Link to="/dashboard/createUser">You dont have account?</Link>
        <button className="bg-buttonColor text-[1.5rem] font-semibold px-6 py-2 w-32 rounded-full">
          Login
        </button>
      </form>
    </section>
  );
};

export default DashboardLogin;
