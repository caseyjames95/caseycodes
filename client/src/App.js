import React from 'react';
import '../src/styles/index.css'
import './App.css';

// Import components
import NavBar from '../src/components/NavBar'
// import GitHubCal from './components/GitHubCal'
import GitHubCalendar from 'react-github-calendar'



function App() {
  return (
    <div className="container">
      <NavBar />
    </div>
  );
}

export default App;
