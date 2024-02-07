import { useEffect, useState } from 'react';
import { fetchImgWithSearchQuery } from '../../images-api';
import { SearchBar } from '../SearchBar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';

import css from './App.module.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const handleSubmit = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setError(null);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);

        const data = await fetchImgWithSearchQuery(query, page);
        setImages(prevImgs => [...prevImgs, ...data.results]);

        const wordImage = data.total > 1 || !data.total ? 'images' : 'image';

        page === 1 &&
          toast.success(
            `We found ${data.total} ${wordImage} for your request "${
              query.split('/')[1]
            }"`
          );

        setShowBtn(data.total_pages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  useEffect(() => {
    error &&
      toast.error(
        'Oops! Something went wrong. Please, try reloading the page',
        {
          style: {
            boxShadow: 'rgb(226, 4, 4) 0px 0px 10px',
          },
        }
      );
  }, [error]);

  return (
    <Section>
      <Container>
        <SearchBar onSubmit={handleSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && <Loader />}
        {showBtn && images.length > 0 && (
          <LoadMoreBtn onLoadMore={handleLoadMore}>Load more</LoadMoreBtn>
        )}
        <Toaster
          position="top-left"
          toastOptions={{
            className: `${css.toast}`,
          }}
        />
      </Container>
    </Section>
  );
};
