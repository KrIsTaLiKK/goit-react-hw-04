import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const KEY = '2Ze6tXcLZ4R9q-ERMEhPilPtrat43xAaxYRp6E0vuv8';
axios.defaults.headers.common['Authorization'] = `Client-ID ${KEY}`;

export const fetchImgWithSearchQuery = async (searchQuery, page) => {
  const query = searchQuery.split('/')[1];

  const resp = await axios.get(`/search/photos`, {
    params: {
      query: query,
      page: page,
      per_page: 20,
    },
  });

  return resp.data;
};
