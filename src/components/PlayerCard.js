// src/components/PlayerCard.js
import React from 'react';

export default function PlayerCard({ player, countryflag,side }) {
  return (
    <div>
      <p><img src={'/countryflags/'+countryflag+'.webp'} width='25px'/>{player}</p>
    </div>
  );
}
