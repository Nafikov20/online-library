import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getMoreBooks } from '../../actionCreators';

import { _baseOffset } from '../../constants/api';

import { Container, Button } from 'react-bootstrap';

import {CardsGrid} from "./CardsGrid/CardsGrid";
import Spinner from "../Spinner/Spinner";


export const BooksList = () => {
  const { isLoading, isLoadingButton, total, books, searchTerm } = useSelector(
    state => state.volumeList,
  );

  const currentPage = searchTerm.page;
  const nextPage = currentPage + 1;

  const possibleCount = nextPage * _baseOffset;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && books?.length === 0) {
      navigate('/', { replace: true });
    }
  }, [books, isLoading, navigate]);

  const handleOnClick = () => {
    dispatch(getMoreBooks({ ...searchTerm, page: nextPage }));
  };

  return (
    <Container className='mb-5'>
      {isLoading ? (
       <Spinner />
      ) : (
        <>
          <div className='mt-3 text-center fw-bold'>Found {total} result</div>
          <CardsGrid books={books} />
          <div className='text-center'>
            {total > 0 && (
              <Button
                onClick={handleOnClick}
                disabled={isLoadingButton || total <= possibleCount}
                className='px-5 mt-3 mb-5'
                variant='outline-secondary'>
                {isLoadingButton ? 'Loading...' : 'Load more...'}
              </Button>
            )}
          </div>
        </>
      )}
    </Container>
  );
};

