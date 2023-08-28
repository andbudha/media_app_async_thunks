import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addUser, fetchUsers } from '../store';
import { Skeleton } from './Skeleton';
import Button from './Button';
import { useThunk } from '../hooks/use-thunk';

export const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    doFetchUsers();
  }, []);

  const addUserHandler = () => {
    doCreateUser();
  };
  if (isLoadingUsers) {
    return <Skeleton times={users.length} className={'h-10 w-full'} />;
  }
  if (loadingUsersError) {
    return <div>Error fetching data!</div>;
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
        {isCreatingUser ? (
          'Creating User..'
        ) : (
          <Button onClick={addUserHandler}>+ Add User</Button>
        )}
        {creatingUserError && 'Error creating user!'}
      </div>
      <h1>{renderedUsers}</h1>
    </div>
  );
};
