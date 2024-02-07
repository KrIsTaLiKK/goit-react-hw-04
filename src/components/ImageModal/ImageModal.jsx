import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import { ImageModalContent } from '../ImageModalContent/ImageModalContent';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export const ImageModal = ({ selectedImg, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      preventScroll={false}
      contentLabel="Image Modal"
      className={`${css.content}`}
      overlayClassName={`${css.overlay}`}
    >
      <GrClose size={30} className={css.closeIcon} onClick={onClose} />
      <div className={css.thumb}>
        <img
          className={css.modalImg}
          src={selectedImg.urls.regular}
          alt={selectedImg.alt_description}
          width={600}
          height={600}
        />
        <ImageModalContent selectedImg={selectedImg} />
      </div>
    </Modal>
  );
};
