import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, fetchUsers } from '../store';
import { Skeleton } from './Skeleton';
import Button from './Button';

export const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => setLoadingUsersError(err.message))
      .finally(() => setIsLoadingUsers(false));
  }, []);

  const addUserHandler = () => {
    dispatch(addUser());
  };
  if (isLoadingUsers) {
    return <Skeleton times={users.length} className={'h-10 w-full'} />;
  }
  if (loadingUsersError) {
    return <div>{loadingUsersError}</div>;
  }

  const renderedUsers = users.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={addUserHandler}>+ Add User</Button>
      </div>
      <h1>{renderedUsers}</h1>
    </div>
  );
};
