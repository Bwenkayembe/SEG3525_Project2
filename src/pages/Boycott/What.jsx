import React, { useState } from 'react';
import './What.css';

const companies = [
  {
    name: 'Apple',
    category: 'tech',
    image: '/images/apple.png',
    alt: 'Apple Logo',
    description: 'Apple is involved due to their use of cobalt mined by children under hazardous conditions in the DRC.'
  },
  {
    name: 'Tesla',
    category: 'car',
    image: '/images/Tesla.jpg',
    alt: 'Tesla Logo',
    description: 'Tesla sources cobalt from the DRC, where child labor is prevalent.'
  },
  {
    name: `Dan Gertler's Companies`,
    category: 'jewelry',
    image: '/images/dan-gertler.jpg',
    alt: 'Dan Gertler\'s face',
    description: 'Dan Gertler is accused of corrupt mining deals in the DRC, exploiting local resources.'
  },
  {
    name: 'Rwanda',
    category: 'country',
    image: '/images/Rwanda.png',
    alt: 'Flag of Rwanda',
    description: 'Rwanda supports rebel groups exploiting minerals from the DRC, leading to conflict and human rights abuses.'
  },
  {
    name: 'Samsung',
    category: 'tech',
    image: '/images/samsung.jpg',
    alt: 'Samsung logo',
    description: 'Samsung has been criticized for sourcing cobalt from DRC mines that use child labor.'
  },
  {
    name: 'Microsoft',
    category: 'tech',
    image: '/images/microsoft.jpg',
    alt: 'Microsoft logo',
    description: 'Microsoft is implicated in sourcing minerals from the DRC, where human rights violations are common.'
  },
  {
    name: 'Sony',
    category: 'tech',
    image: '/images/sony.png',
    alt: 'Sony Logo',
    description: 'Sony relies on cobalt from the DRC, where mining conditions are poor and involve child labor.'
  },
  {
    name: 'Tiffany & Co.',
    category: 'jewelry',
    image: '/images/Tiffany.jpg',
    alt: 'Tiffany & Co. Logo',
    description: 'Tiffany & Co. faces challenges ensuring all their diamonds are free from conflict and exploitation.'
  },
  {
    name: 'Dell',
    category: 'tech',
    image: '/images/Dell.jpg',
    alt: 'Dell Logo',
    description: 'Dell has been criticized for using cobalt mined by children in the DRC.'
  }
  // Add more companies and countries as needed
];

const What = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCompanies = selectedCategory === 'all'
    ? companies
    : companies.filter(company => company.category === selectedCategory);

  return (
    <div className="what-container">
      <h1 className="what-title">WHAT TO BOYCOTT</h1>
      <p className="what-subtitle">Learn about the companies and countries involved in the crisis in Congo and why you should boycott them.</p>
      
      <div className="what-filter-container">
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('tech')}>Tech Companies</button>
        <button onClick={() => setSelectedCategory('car')}>Car Companies</button>
        <button onClick={() => setSelectedCategory('jewelry')}>Jewelry Companies</button>
        <button onClick={() => setSelectedCategory('country')}>Countries</button>
      </div>

      <div className="what-cards-container">
        {filteredCompanies.map((company, index) => (
          <div className="what-card" key={index}>
            <img src={company.image} alt={company.alt} className="what-card-image" />
            <h3 className="what-card-title">{company.name}</h3>
            <p className="what-card-description">{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default What;
