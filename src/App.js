import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Highscore from './components/Highscore';
import Register from './components/Register';
import Profile from './components/Profile';
import { expect } from "chai";
import Login from './components/Login';
import MemoryGame from './games/MemoryGame';



const App = () => {
  let user = {
    user_id: 1,
    name: "Pera",
    surname: "Peric",
    username: "Peraperic",
    email: "peric@yahoo.com",
    picture: null
  }

  let scores = [
    {
      score_id: 0,
      user_id: 0,
      game: 0,
      score: 100
    },
    {
      score_id: 1,
      user_id: 1,
      game: 0,
      score: 10
    },
    {
      score_id: 2,
      user_id: 0,
      game: 1,
      score: 80
    },
  ]


  return (
    <>
      <Header logedIn={false} />
      <hr />
      <Highscore scores={scores}/>
      <hr />
      <Register />
      <hr />
      <Login />
      <hr />
      <Profile user={user}/>
      <hr />
      <MemoryGame />
      <hr />
      <Footer />
    </>
  )
}

export default App;
