import React from 'react';

import { Container } from 'react-bootstrap';

export const HomePage = () => {
  return (
    <Container>
      <h3 className='fs-3 text-center text-secondary mt-5'> Привет пользователь!</h3>
      <p className='fs-4 text-center text-secondary'>
          Это сервис по поиску книг.
      </p>
    </Container>
  );
};

