import {Link} from 'react-router-dom';

export default function Settings() {
  return (
    <div>
        <title>Settings</title>
        <h2>Settings</h2>
        <section>
          <span>Chroma Key Background</span>
          <input type='color' value='#00FF00'></input>
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
        <Link to='/'>HUD</Link>
    </div>
  );
}