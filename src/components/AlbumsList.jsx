import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import { Skeleton } from './Skeleton';
import Button from './Button';
import { AlbumsListItem } from './AlbumsListItem';

export const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const addAlbumHandler = () => {
    addAlbum(user);
  };
  let content;
  if (isLoading) {
    content = <Skeleton className={'h-10 w-full'} times={3} />;
  } else if (error) {
    content = <div>Error loading albums!</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album}></AlbumsListItem>;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={addAlbumHandler} loading={results.isLoading}>
          +Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};
