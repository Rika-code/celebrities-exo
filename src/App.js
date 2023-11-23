
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./page/Home"
import Celebrities from './page/Celebrities';
import CelebritiesRandom from './page/CelebritiesRandom';
import OneCelebrity from './page/OneCelebrity';
import TvSpeakersPage from './page/TVSpeakersPage';
import CopyrightPage from './page/CopyrightPage';
import FormMessagePage from './page/FormMessagePage';
import LikesPage from './page/LikesPage';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path = "/" element = {<Home/>}/>
  <Route path = "/stars" element ={<Celebrities/>}/>
  <Route path = "/celebrities/:celebrityId" element={<OneCelebrity/>}/>
  <Route path = "/random" element = {<CelebritiesRandom/>}/>
  <Route path ="/speakers" element = {<TvSpeakersPage/>}/>
  <Route path ="/copyright" element ={<CopyrightPage/>}/>
  <Route path ="/message" element ={<FormMessagePage/>}/>
  <Route path = "/like"   element = {<LikesPage/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
