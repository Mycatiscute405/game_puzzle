import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import JisawPuzzleView from './view/game-module/JisawPuzzleView';
import NumberPuzzleView from './view/game-module/NumberPuzzleView';

const App = () => {
  return (
    <div id="App">
      <div className="App-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<JisawPuzzleView />}></Route>
            <Route path="/num" element={<NumberPuzzleView />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
