import { useState } from 'react';
import './App.css';

import LeftCard from './components/LeftCard';
export default function App() {

    const [bgcolordata, setbgcolordata] = useState('');
    const backgroundChange = (e) => {
      setbgcolordata(e.target.value);
    };
    const stylemain = {
      'width': '1920px',
      'height': '1080px',
 //     'background-color': bgcolordata
      'background-image': 'url(/mk_default_frame.jpg)',
      'background-size': 'cover'
    };
    return (
        <div>
          <div style={stylemain} className='chromascreen'>
            <title>mkhud</title>
            <LeftCard player='dikdama' countryflag='brazil' score='0'></LeftCard>
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