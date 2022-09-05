import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameList from './pages/GameList';
import GameDetail from './pages/GameDetail';
import Navbar from "./components/navbar";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Documentation from './pages/Documentation/Documentation';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
          <Route exact path='/game/list' element={<GameList/>}/>
          <Route exact path='/game/detail/rock-scissor-paper' element={<GameDetail />}/>
          <Route exact path='/documentation' element={<Documentation/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
