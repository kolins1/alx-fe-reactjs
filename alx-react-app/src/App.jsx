import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';



function App() {
  return (
      <div className="App">
          <WelcomeMessage />
      </div>
  );
}
function App() {
  return (
      <div className="App">
          <Header />
          <MainContent />
          <Footer />
      </div>
  );
}

function App() {
  return (
      <div className="App">
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
          <UserProfile name="Bob" age="30" bio="Enjoys coding and playing chess" />
      </div>
  );
}


export default App;







