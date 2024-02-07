import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ children, onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={css.loadMoreBtn}>
      {children}
    </button>
  );
};
