import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.galleryList}>
      {images.map(item => (
        <li key={item.id} className={css.galleryItem}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};
