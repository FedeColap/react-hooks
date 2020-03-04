import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Bookslist from './components/Bookslist'
import ToggleTheme from './components/ToggleTheme'
import ThemeContextProvider from './context/ThemeContext'

// modification for branch
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Bookslist />
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
