import '../styles/PlayerCard.module.css';
import PropTypes from 'PropType';

export default function PlayerCard({ player, countryflag }) {
  return (
    <div>
      <p><img src={'/countryflags/'+countryflag+'.webp'} width='25px'/>{player}</p>
    </div>
  );
}

PlayerCard.PropType = {
  player: PropTypes.string,
  countryflag: PropTypes.string,
};