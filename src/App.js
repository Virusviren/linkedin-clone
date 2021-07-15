import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      {/* Header */}
      <Header />
      {/* Appbody */}
      <div className='app__body'>
        {/* Sidebar */}
        <Sidebar />
      </div>

      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
