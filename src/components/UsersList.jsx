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
  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={users.length} className={'h-10 w-full'} />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data!</div>;
  } else {
    content = users.map((user) => {
      return (
        <div key={user.id} className="mb-2 border rounded">
          <div className="flex p-2 justify-between items-center cursor-pointer">
            {user.name}
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={addUserHandler} loading={isCreatingUser}>
          + Add User
        </Button>
        {creatingUserError && 'Error creating user!'}
      </div>
      <h1>{content}</h1>
    </div>
  );
};
