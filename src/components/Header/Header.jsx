import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row } from 'react-bootstrap';
import {SerchTermForm} from "../SerchTermForm/SerchTermForm";


export const Header = () => {
  return (
    <Container fluid className='header shadow-lg'>
      <Row>
        <Link to={'/'} className='text-decoration-none text-reset'>
          <h1 className='text-center text-white fw-bold mt-3'>Поиск книг.</h1>
        </Link>
      </Row>
      <SerchTermForm />
    </Container>
  );
};

