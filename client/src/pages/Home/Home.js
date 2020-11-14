import React from 'react';
import Results from '../../components/Results/Results';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import './Home.scss';

const Home = () => {

  return (
    <div className = "Home">
      <SearchContainer>
        <Results />
      </SearchContainer>
    </div>
  )
}

export default Home