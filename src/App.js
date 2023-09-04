import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import {BooksList} from "./components/BooksList/BooksList";
import {HomePage} from "./components/HomePage/HomePage";
import {Header} from "./components/Header/Header";
import {DetailsBookPage} from "./components/DetailsBookPage/DetailsBookPage";
import {Page404} from "./components/ErrorMessage/404";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='books/list' element={<BooksList />} />
        <Route path='books/:id' element={<DetailsBookPage />} />
        <Route element={<Page404/>} path="*"/>
      </Routes>
    </>
  );
};

export default App;
