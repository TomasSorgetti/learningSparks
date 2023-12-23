import React from "react";

const UserCard = ( {user} ) => {
    const { name, email, createdAt, role } = user;
  const fecha = new Date(createdAt);
  const date = `${fecha.getDate()}/${
    fecha.getMonth() + 1
  }/${fecha.getFullYear()}`;
  return (
    <div>
      <h5>{name}</h5>
      <p>{email}</p>
      <p>{date}</p>
      <p>role: {role}</p>
    </div>
  );
};

export default UserCard;
