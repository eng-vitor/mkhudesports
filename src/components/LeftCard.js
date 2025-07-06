import '../styles/LeftCard.module.css';
import PropTypes from 'prop-types';

export default function LeftCard({ player, countryflag, score, isloser, teamtag}) {
  return (
    <div className='body-left'>
      <section className='card-left'>
        <p><img src={'/countryflags/'+countryflag+'.png'}/><span className='teamtag'>{teamtag}</span><span className='nameplayer'>{player}<small>{isloser ? '[L]': ''}</small></span></p>
      </section>
      <p className='score-left'>{score}</p>
    </div>
  );
}

LeftCard.PropType = {
  player: PropTypes.string,
  countryflag: PropTypes.string,
  score: PropTypes.number,
  isloser: PropTypes.number
};