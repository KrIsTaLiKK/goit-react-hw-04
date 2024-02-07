import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';
import css from './ImageCard.module.css';

export const ImageCard = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <div onClick={handleOpenModal} className={css.thumb}>
        <img src={item.urls.small} alt={item.alt_description} />
      </div>
      <ImageModal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
        selectedImg={item}
      />
    </div>
  );
};
