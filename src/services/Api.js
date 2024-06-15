// src/services/Api.js
export const fetchPreviews = async () => {
    // This is a placeholder URL. Replace with your actual API endpoint.
    const response = await fetch('https://api.example.com/podcasts');
    if (!response.ok) {
      throw new Error('Failed to fetch podcasts');
    }
    const data = await response.json();
    return data;
  };
  