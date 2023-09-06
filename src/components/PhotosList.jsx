import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import Button from './Button';

export const PhotosList = ({ album }) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);

  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const addPhotoHandler = () => {
    addPhoto(album);
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={addPhotoHandler}>
          + Add Photo
        </Button>
      </div>
    </div>
  );
};
