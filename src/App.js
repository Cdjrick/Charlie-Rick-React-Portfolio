import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Pages from './components/portfolioPages/Pages'

function App() {
  const [currentPage, setCurrentPage] = useState('About')

  return (
    <div className='App'>
      <div className='navBar'>
        <Header currentPage={currentPage} handlePageChange={setCurrentPage}/>
      </div>

      <div>
        <Pages currentPage={currentPage}/>
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
