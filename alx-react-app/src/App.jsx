import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeMessage from './components/WelcomeMessage';

import './App.css'


function App() {
  return (
      <div className="App">
          <WelcomeMessage />
      </div>
  );
}

export default App;
