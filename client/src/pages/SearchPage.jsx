import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Loader from '../components/Loader'; // Import your Loader component

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMoreResults, setHasMoreResults] = useState(true);
  const navigate = useNavigate();

  const query = location?.search?.slice(3);

  const fetchData = async () => {
    try {
      const response = await axios.get(`search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });
      if (response.data.results.length === 0) {
        setHasMoreResults(false);
      }
      setData((prev) => [
        ...prev,
        ...response.data.results,
      ]);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      setPage(1);
      setData([]);
      setHasMoreResults(true); // Reset for new search
      setLoading(true);
      fetchData();
    }
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (query && hasMoreResults) {
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='py-16'>
      <div className='lg:hidden my-2 mx-1 sticky top-[70px] z-30'>
        <input
          type='text'
          placeholder='Search here...'
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query?.split('%20')?.join(' ')}
          className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900 '
        />
      </div>

      <div className='container mx-auto'>
        <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Search Results</h3>

        {loading && <Loader />} {/* Show Loader component while loading */}

        {!loading && data.length === 0 && (
          <p>No results found for "{query.split('%20').join(' ')}".</p>
        )}

        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {data.map((searchData, index) => (
            <Card
              data={searchData}
              key={searchData.id + 'search'}
              media_type={searchData.media_type}
            />
          ))}
        </div>

        {!loading && !hasMoreResults && data.length > 0 && (
          <p>No more results to show.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;