import '../styles/LeftCard.module.css';
import PropTypes from 'prop-types';

export default function LeftCard({ player, countryflag, score }) {
  return (
    <div>
      <section className='card-left'>
        <p><img src={'/countryflags/'+countryflag+'.png'}/><span className='nameplayer'>{player}</span></p>
        <p className='score-left'>{score}</p>
      </section>
    </div>
  );
}

LeftCard.PropType = {
  player: PropTypes.string,
  countryflag: PropTypes.string,
  score: PropTypes.number
};