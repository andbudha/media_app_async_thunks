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
        {error && <div>Error deleting user!</div>}
        <Button loading={isLoading} onClick={handleClick}>
          <GoTrash />
        </Button>
        {user.name}
      </div>
    </div>
  );
};
