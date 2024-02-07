import { IoMdImages, IoIosArrowRoundForward } from 'react-icons/io';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import css from './ImageModalContent.module.css';

export const ImageModalContent = ({ selectedImg }) => {
  return (
    <div className={css.infoWrap}>
      <div>
        <p>
          <span className={css.subtitle}>Author:</span> {selectedImg.user.name}
        </p>
        <div className={css.likesWrap}>
          <p>
            <span className={css.subtitle}>Likes:</span> {selectedImg.likes}
          </p>
          <BsFillSuitHeartFill color="red" />
        </div>
      </div>
      <div className={css.fullImgWrap}>
        <p>
          <span className={css.subtitle}>Original image</span> you can see here
        </p>
        <IoIosArrowRoundForward size={30} />
        <span className={css.btnWrap}>
          <a
            href={selectedImg.urls.full}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IoMdImages size={30} className={css.imgIcon} />
          </a>
        </span>
      </div>
    </div>
  );
};
