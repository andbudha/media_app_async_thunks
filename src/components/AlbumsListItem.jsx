import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { ExpandabalePanel } from './ExpandablePanel';
import { useRemoveAlbumMutation } from '../store';

export const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation(album);
  const removeAlbumHandler = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button
        className="mr-2"
        onClick={removeAlbumHandler}
        loading={results.isLoading}
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandabalePanel key={album.id} header={header}>
      List of photos in the album!
    </ExpandabalePanel>
  );
};
