import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/homeScreen';
import RecordScreen from './components/recordAudio';
import FunctionScreen from './components/functions.js';
import TranscribeScreen from './components/transcribe.js';
import SummarizeScreen from './components/summarize.js';
import EventScreen from './components/events.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/record" element={<RecordScreen />} />
        <Route path="/functions" element={<FunctionScreen />} />
        <Route path="/transcribe" element={<TranscribeScreen />} />
        <Route path="/summarize" element={<SummarizeScreen />} />
        <Route path="/events" element={<EventScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
