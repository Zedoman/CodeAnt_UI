import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SigninPage from './components/signin';
import Repository from './components/Repository';

function App() {
  return (
    <div className="flex overflow-hidden flex-col bg-stone-950">
    <Router>
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/repo" element={<Repository/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
