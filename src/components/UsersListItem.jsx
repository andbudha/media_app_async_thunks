import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { useThunk } from '../hooks/use-thunk';
import { deleteUser } from '../store';

export const UsersListItem = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleClick = () => {
    doDeleteUser(user);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button className="mr-3" loading={isLoading} onClick={handleClick}>
            <GoTrash />
          </Button>
          {error && <div>Error deleting user!</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
};
