import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Bookslist from './components/Bookslist'
import ThemeContextProvider from './context/ThemeContext'

// modification for branch
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Bookslist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
