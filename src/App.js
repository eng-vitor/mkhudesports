import { useState } from 'react';
import './App.css';

import LeftCard from './components/LeftCard';
import RightCard from './components/RightCard';
import MatchLabel from './components/MatchLabel';
import MerchanSlider from './components/MerchanSlider';

export default function App() {

    const [bgColorData, setBgColorData] = useState('');
    const [teamTagPlayerOne, setTeamTagPlayerone] = useState('');
    const [namePlayerOne, setNamePlayerOne] = useState('');

    const backgroundChange = (e) => { setBgColorData(e.target.value); };
    const TeamTagPlayerOneChange = (e) => { setTeamTagPlayerone(e.target.value); };
    const NamePlayerOneChange = (e) => { setNamePlayerOne(e.target.value);};

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
            <section className='cards'>
              <LeftCard teamtag={teamTagPlayerOne ? teamTagPlayerOne : 'TeamOne'} player={namePlayerOne ? namePlayerOne : 'PlayerOne'} countryflag='brazil' score='0' isLoser={null}></LeftCard>
              <RightCard teamtag='FURIA' player='voltaik007' countryflag='brazil' score='1' isLoser='1'></RightCard>
            </section>
            <MatchLabel Mlabel='Winners Semi Final'></MatchLabel>
            <section className='merchan-area'>
              <MerchanSlider></MerchanSlider>
            </section>
          </div>
            <h2>Settings</h2>
            <section>
              <span>Chroma Key Background</span>
              <input type='color' onChange={backgroundChange} defaultValue='#00FF00'/>
            </section>
            <section>
              <h2>Player 1 Data</h2>
              <span>Name</span>
              <input type='text' onChange={NamePlayerOneChange}></input>
              <span>Team tag</span>
              <input type='text' onChange={TeamTagPlayerOneChange}></input>
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