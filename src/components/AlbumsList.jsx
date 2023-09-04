import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import { Skeleton } from './Skeleton';
import { ExpandabalePanel } from './ExpandablePanel';
import Button from './Button';

export const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const addAlbumHandler = () => {
    addAlbum(user);
  };
  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error loading albums!</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandabalePanel key={album.id} header={header}>
          List of photos in the album!
        </ExpandabalePanel>
      );
    });
  }

  return (
    <div>
      <div>
        Albums for {user.name}
        <Button onClick={addAlbumHandler}>+Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
};
