import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
    const URL = "http://localhost:3001/user/dashboard/login";
    if (form.email && form.password) {
      try {
        await axios.post(URL, form).then((response) => {
          const token = response.data.token;
          localStorage.setItem("token", token);
          navigate("/dashboard/home");
        });
      } catch (error) {
        console.log("error login",error);
      }
    }
  };

  return (
    <section className="w-full h-[100dvh]">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button>Login</button>
        <Link to="/dashboard/createUser">You dont have account?</Link>
      </form>
    </section>
  );
};

export default DashboardLogin;
