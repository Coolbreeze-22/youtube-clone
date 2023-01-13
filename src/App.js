import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components';
import { useState } from 'react';


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("CoolBreeze");
  

  return (
  <BrowserRouter>
    <Box>
      {/* sx={{ backgroundColor: 'black', color: 'green' }}> */}
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} />
        <Route path="/videos/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />}/>
        <Route path="/search/:searchTerm" element={<SearchFeed selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}/>
      </Routes>
    </Box>
  </BrowserRouter>
  )};


export default App;
