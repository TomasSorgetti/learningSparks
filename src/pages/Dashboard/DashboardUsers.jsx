import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../../redux/actions';

import Navigation from '../../components/Dashboard/Navigation/Navigation';
import UserCard from '../../components/Dashboard/userCard/UserCard';

const DashboardUsers = () => {
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state);
    const token = localStorage.getItem("token")
    useEffect(() => {
      dispatch(getAllUsers(token));
    }, []);
  
  
  return (
    <div>
      <Navigation />
      {users?.map((user) => (
        <UserCard key={user.id} user={ user } />
      ))}
    </div>
  );
}

export default DashboardUsers