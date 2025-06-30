import '../styles/PlayerCard.module.css';

export default function PlayerCard({ player, countryflag,side }) {
  return (
    <div>
      <p><img src={'/countryflags/'+countryflag+'.webp'} width='25px'/>{player}</p>
    </div>
  );
}
