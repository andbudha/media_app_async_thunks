import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import Button from './Button';
import { PhotosListItem } from './PhotosListItem';
import { Skeleton } from './Skeleton';

export const PhotosList = ({ album }) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);

  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const addPhotoHandler = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className={'h-8 w-8'} times={data.length} />;
  } else if (error) {
    content = <div>Error fetching phtos...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }
  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={addPhotoHandler}>
          + Add Photo
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};
