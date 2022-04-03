
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Offer from './components/Offer/Offer';
import News from './components/News/News';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Video from './components/Videos/Video';
import Course from './components/Course/Course';

import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">

    <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route  path='/shop' element={<Shop></Shop>} ></Route>
        <Route path='/offer' element={<Offer></Offer>} ></Route>
        <Route path='/news' element={<News></News>} ></Route>
        <Route  path='/about' element={<About></About>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/videos' element={<Video></Video>} ></Route>
        <Route path='/course'  element={<Course></Course>} ></Route>
        <Route path='/*' element={<NotFound></NotFound>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
