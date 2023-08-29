import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { useThunk } from '../hooks/use-thunk';
import { deleteUser } from '../store';
import { ExpandabalePanel } from './ExpandablePanel';
import { AlbumsList } from './AlbumsList';

export const UsersListItem = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleClick = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting user!</div>}
      {user.name}
    </>
  );

  return (
    <ExpandabalePanel header={header}>
      <AlbumsList user={user} />
    </ExpandabalePanel>
  );
};
