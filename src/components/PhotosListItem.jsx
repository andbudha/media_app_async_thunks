import { GoTrash } from 'react-icons/go';
import { useRemovePhotoMutation } from '../store';

export const PhotosListItem = ({ photo }) => {
  const [removePhoto] = useRemovePhotoMutation();
  const removePhotoHandler = () => {
    removePhoto(photo);
  };
  return (
    <div className="m-2 relative cursor-pointer" onClick={removePhotoHandler}>
      <img src={photo.url} alt="random img" className="h-20 w-20" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-2xl" />
      </div>
    </div>
  );
};
