// src/components/PodcastDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PodcastDetail = ({ podcast }) => {
  const { id } = useParams();

  if (!podcast || podcast.id !== id) {
    return <div>Loading...</div>; // Handle loading state or fetch podcast by ID
  }

  return (
    <div className="PodcastDetail">
      <h2>{podcast.title}</h2>
      <img src={podcast.image} alt={podcast.title} />
      <p>{podcast.description}</p>
    </div>
  );
};

export default PodcastDetail;
