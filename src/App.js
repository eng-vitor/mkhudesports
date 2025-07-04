import { useState } from 'react';
import './App.css';

import PlayerCard from './components/PlayerCard';
export default function App() {

    const [bgcolordata, setbgcolordata] = useState('');
    const backgroundChange = (e) => {
      setbgcolordata(e.target.value);
    };
    const stylemain = {
      'width': '1920px',
      'height': '1080px',
      'background-color': bgcolordata
    };
    return (
        <div>
          <div style={stylemain} className='chromascreen'>
            <title>mkhud</title>
            <PlayerCard player='dikdama' countryflag='br'></PlayerCard>
          </div>
            <h2>Settings</h2>
            <section>
              <span>Chroma Key Background</span>
              <input type='color' onChange={backgroundChange} defaultValue='#00FF00'/>
            </section>
            <section>
              <h2>Player 1 Data</h2>
              <span>Name</span>
              <input type='text'></input>
              <span>Flag</span>
              <input type='text'></input>
              <span>Loser bracket</span>
              <input type='checkbox'></input>
            </section>
            <section>
              <h2>Player 2 Data</h2>
              <span>Name</span>
              <input type='text'></input>
              <span>Flag</span>
              <input type='text'></input>
              <span>Loser bracket</span>
              <input type='checkbox'></input>
            </section>
        </div>
  );
}