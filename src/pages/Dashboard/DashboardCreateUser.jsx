import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
    const URL = "http://localhost:3001/user";
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
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
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
        <div>
          <label htmlFor="">Repeat password</label>
          <input
            type="password"
            name="repeatPassword"
            value={form.repeatPassword}
            onChange={handleChange}
          />
        </div>
        <button>Create</button>
        <Link to="/dashboard">You already have account?</Link>
      </form>
    </section>
  );
};

export default DashboardCreateUser;
