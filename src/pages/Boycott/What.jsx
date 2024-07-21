import React, { useState } from 'react';
import './What.css';

const companies = [
  {
    name: 'Company 1',
    category: 'tech',
    image: '/images/company1.png',
    description: 'Description of how Company 1 is involved.'
  },
  {
    name: 'Company 2',
    category: 'car',
    image: '/images/company2.png',
    description: 'Description of how Company 2 is involved.'
  },
  {
    name: 'Company 3',
    category: 'jewelery',
    image: '/images/company3.png',
    description: 'Description of how Company 3 is involved.'
  },
  {
    name: 'Country 1',
    category: 'country',
    image: '/images/country1.png',
    description: 'Description of how Country 1 is involved.'
  },
  {
    name: 'Country 1',
    category: 'country',
    image: '/images/country1.png',
    description: 'Description of how Country 1 is involved.'
  },
  {
    name: 'Country 1',
    category: 'car',
    image: '/images/country1.png',
    description: 'Description of how Country 1 is involved.'
  },
  {
    name: 'Country 1',
    category: 'tech',
    image: '/images/country1.png',
    description: 'Description of how Country 1 is involved.'
  },
  {
    name: 'Country 1',
    category: 'jewelery',
    image: '/images/country1.png',
    description: 'Description of how Country 1 is involved.'
  },
  {
    name: 'Company 1',
    category: 'tech',
    image: '/images/country1.png',
    description: 'Description of how Country 1 is involved.'
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
      
      <div className="filter-container">
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('tech')}>Tech Companies</button>
        <button onClick={() => setSelectedCategory('car')}>Car Companies</button>
        <button onClick={() => setSelectedCategory('jewelery')}>Jewelery Companies</button>
        <button onClick={() => setSelectedCategory('country')}>Countries</button>
      </div>

      <div className="cards-container">
        {filteredCompanies.map((company, index) => (
          <div className="card" key={index}>
            <img src={company.image} alt={company.name} className="card-image" />
            <h3 className="card-title">{company.name}</h3>
            <p className="card-description">{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default What;
