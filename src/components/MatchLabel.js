import '../styles/MatchLabel.module.css';
import PropTypes from 'prop-types';

export default function MatchLabel({ Mlabel }) {
  return (
    <div className='body-matchlabel'>
      <section>
        <p>{Mlabel}</p>
      </section>
    </div>
  );
}

MatchLabel.PropType = {
  Mlabel: PropTypes.string
};