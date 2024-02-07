import { useState } from 'react';

import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FcSearch } from 'react-icons/fc';
import { GrClose } from 'react-icons/gr';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = evt => {
    setQuery(evt.target.value);
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.error('Please, enter the name of the image');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="searchQuery"
          value={query}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        {query && (
          <span className={css.closeIconWrap} onClick={() => setQuery('')}>
            <GrClose size={12} className={css.closeIcon} />
          </span>
        )}
        <button className={css.submitBtn} type="submit">
          <FcSearch size={50} className={css.searchIcon} />
        </button>
      </form>
    </header>
  );
};
