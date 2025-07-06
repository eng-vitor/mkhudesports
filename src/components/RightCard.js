import '../styles/RightCard.module.css';
import PropTypes from 'prop-types';

export default function RightCard({ player, countryflag, score, isloser, teamtag}) {
  return (
    <div className='body-right'>
        <p className='score-right'>{score}</p>
        <section className='card-right'>
            <p><img src={'/countryflags/'+countryflag+'.png'}/><span className='teamtag'>{teamtag}</span><span className='nameplayer'>{player}<small>{isloser ? '[L]': ''}</small></span></p>
        </section>
    </div>
  );
}

RightCard.PropType = {
  player: PropTypes.string,
  countryflag: PropTypes.string,
  score: PropTypes.number,
  isloser: PropTypes.number
};