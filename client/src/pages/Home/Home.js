import React, { useState } from 'react';
import Search from '../../components/Search/Search'
import Results from '../../components/Results/Results'

const Home = () => {
  
  // const [loading, setLoading] = useState(false);

  return (
    <div className = "Home" style = {{paddingTop: '5rem', backgroundColor: '#e7ebf0'}}>
      <Search />
        {/* {loading && <p className="loading">Loading...</p>} */}
      <Results />
    </div>
  )
}

export default Home;