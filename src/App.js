// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PodcastList from './components/PodcastList';
import PodcastDetail from './components/PodcastDetail'; // Create this component similarly to handle individual podcast details

const App = () => {
  const [currentPodcast, setCurrentPodcast] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PodcastList setCurrentPodcast={setCurrentPodcast} />} />
          <Route path="/podcast/:id" element={<PodcastDetail podcast={currentPodcast} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
