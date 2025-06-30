// src/App.js
import React, { useState } from 'react';
import PlayerCard from './components/PlayerCard';

const hudname="mkhud"; 
export default function App() {
    return (
    <div>
       <title>{hudname}</title>
       <PlayerCard player='dikdama' countryflag='br'></PlayerCard>
    </div>
  );
}