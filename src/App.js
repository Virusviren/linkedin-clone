import React from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      {/* Header */}
      <Header />
      {/* Appbody */}
      <div className='app__body'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
      </div>

      {/* Widgets */}
    </div>
  );
}

export default App;
