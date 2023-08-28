import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import { Skeleton } from './Skeleton';

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const isLoading = useSelector((state) => state.users.isLoading);
  const error = useSelector((state) => state.users.error);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <Skeleton times={6} className={'h-10 w-full'} />;
  }
  if (error) {
    return <div>Fetching data failed...</div>;
  }
  return (
    <div className="container mx-auto">
      <h1>{users.length}</h1>
    </div>
  );
};
