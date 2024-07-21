import React, { useState } from 'react';
import './Know.css';

const Know = () => {
  const [selectedFacet, setSelectedFacet] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFacetClick = (facet) => {
    setSelectedFacet(facet);
    setSelectedVideo(null);
  };

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="know-page">
      <h1>KNOW MORE</h1>
      <p>Education is elevation: Inform yourself on the matter, and gain more knowledge.</p>
      <div className="facets">
        <button onClick={() => handleFacetClick('all')}>All</button>
        <button onClick={() => handleFacetClick('articles')}>Articles</button>
        <button onClick={() => handleFacetClick('books')}>Books</button>
        <button onClick={() => handleFacetClick('videos')}>Videos</button>
      </div>
      <div className="content">
        {(selectedFacet === 'all' || selectedFacet === 'articles') && (
          <div className="articles">
            <div className="card">
              <a href="https://newint.org/violence/2024/its-time-hold-big-tech-accountable-violence-drc" target="_blank" rel="noopener noreferrer">Article 1: Holding Big Tech Accountable</a>
            </div>
            <div className="card">
              <a href="https://www.cfr.org/global-conflict-tracker/conflict/violence-democratic-republic-congo" target="_blank" rel="noopener noreferrer">Article 2: Violence in the Democratic Republic of The Congo</a>
            </div>
            <div className="card">
              <a href="https://worldwithoutgenocide.org/genocides-and-conflicts/congo" target="_blank" rel="noopener noreferrer">Article 3: Genocides and Conflicts</a>
            </div>
          </div>
        )}
        {(selectedFacet === 'all' || selectedFacet === 'books') && (
          <div className="books">
            <div className="card">Cobalt Red: How the Blood of the Congo Powers Our Lives by Siddharth Kara</div>
            <div className="card">King Leopold's Ghost: A Story of Greed, Terror, and Heroism in Colonial Africa by Adam Hochschild</div>
            <div className="card">How Dare the Sun Rise: Memoirs of a War Child by Sandra Uwiringiyimana and Abigail Pesta</div>
          </div>
        )}
        {(selectedFacet === 'all' || selectedFacet === 'videos') && (
          <div className="videos">
            <div className="card" onClick={() => handleVideoClick('a4lFc43Yx4I')}>The Congo War Explained</div>
            <div className="card" onClick={() => handleVideoClick('OlJwDXelMcM')}>How Mobutu Conquered Congo</div>
            <div className="card" onClick={() => handleVideoClick('0Q2IW7UEclI')}>The Cobalt Challenge</div>
          </div>
        )}
        {selectedVideo && (
          <div className="video-modal">
            <div className="video-content">
              <span className="close" onClick={() => setSelectedVideo(null)}>×</span>
              <iframe
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Know;
