import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.data);
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return <div className="container mx-auto">UsersList</div>;
};
