import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddBook from './components/AddBook';
import Home from './components/Home';
import Books from './components/Book/Books';
// import About from './components/About';
import BookDetail from './components/Book/BookDetail';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddBook />} />
          <Route path='/books' element={<Books />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/books/:id' element={<BookDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
