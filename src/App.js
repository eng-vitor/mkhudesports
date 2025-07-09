import { useState } from 'react';
import './App.css';

import LeftCard from './components/LeftCard';
import RightCard from './components/RightCard';
import MatchLabel from './components/MatchLabel';
import MerchanSlider from './components/MerchanSlider';

export default function App() {

    const [bgColorData, setBgColorData] = useState('');
    const [teamTagPlayerOne, setTeamTagPlayerOne] = useState('');
    const [namePlayerOne, setNamePlayerOne] = useState('');
    const [flagPlayerOne, setFlagPlayerOne] = useState('');
    const [isLoserPlayerOne, setIsLoserPlayerOne] = useState(false);
    const [matchLabel, setMatchLabel] = useState('');
    const [scorePlayerOne, setScorePlayerOne] = useState('');

    const [teamTagPlayerTwo, setTeamTagPlayerTwo] = useState('');
    const [namePlayerTwo, setNamePlayerTwo] = useState('');
    const [flagPlayerTwo, setFlagPlayerTwo] = useState('');
    const [isLoserPlayerTwo, setIsLoserPlayerTwo] = useState(false);
    const [scorePlayerTwo, setScorePlayerTwo] = useState('');

    const backgroundChange = (e) => { setBgColorData(e.target.value); };
    const TeamTagPlayerOneChange = (e) => { setTeamTagPlayerOne(e.target.value); };
    const NamePlayerOneChange = (e) => { setNamePlayerOne(e.target.value);};
    const FlagPlayerOneChange = (e) => { setFlagPlayerOne(e.target.value);};
    const IsLoserPlayerOneChange = () => { setIsLoserPlayerOne(!isLoserPlayerOne);};
    const MatchLabelChange = (e) => { setMatchLabel(e.target.value);};
    const ScorePlayerOneChange = (e) =>{ setScorePlayerOne(e.target.value)};

    const TeamTagPlayerTwoChange = (e) => { setTeamTagPlayerTwo(e.target.value); };
    const NamePlayerTwoChange = (e) => { setNamePlayerTwo(e.target.value);};
    const FlagPlayerTwoChange = (e) => { setFlagPlayerTwo(e.target.value);};
    const IsLoserPlayerTwoChange = () => { setIsLoserPlayerTwo(!isLoserPlayerTwo);};
    const ScorePlayerTwoChange = (e) =>{ setScorePlayerTwo(e.target.value)};

    const stylemain = {
      'width': '1920px',
      'height': '1080px',
      'background-color': bgColorData,
      'background-size': 'cover'
    };
    let flags =['Abkhazia',
                'Afghanistan',
                'Aland',
                'Albania',
                'Algeria',
                'American-Samoa',
                'Andorra',
                'Angola',
                'Anguilla',
                'Antarctica',
                'Antigua-and-Barbuda',
                'Argentina',
                'Armenia',
                'Aruba',
                'Australia',
                'Austria',
                'Azerbaijan',
                'Bahamas',
                'Bahrain',
                'Bangladesh',
                'Barbados',
                'Basque-Country',
                'Belarus',
                'Belgium',
                'Belize',
                'Benin',
                'Bermuda',
                'Bhutan',
                'Bolivia',
                'Bosnia-and-Herzegovina',
                'Botswana',
                'Brazil',
                'British-Antarctic-Territory',
                'British-Virgin-Islands',
                'Brunei',
                'Bulgaria',
                'Burkina-Faso',
                'Burundi',
                'Cambodia',
                'Cameroon',
                'Canada',
                'Canary-Islands',
                'Cape-Verde',
                'Catalonia',
                'Cayman-Islands',
                'Central-African-Republic',
                'Chad',
                'Chile',
                'China',
                'Christmas-Island',
                'Cocos-Keeling-Islands',
                'Colombia',
                'Commonwealth',
                'Comoros',
                'Cook-Islands',
                'Costa-Rica',
                'Cote-dIvoire',
                'Croatia',
                'Cuba',
                'Curacao',
                'Cyprus',
                'Czech-Republic',
                'Democratic-Republic-of-the-Congo',
                'Denmark',
                'Djibouti',
                'Dominica',
                'Dominican-Republic',
                'East-Timor',
                'Ecuador',
                'Egypt',
                'El-Salvador',
                'England',
                'Equatorial-Guinea',
                'Eritrea',
                'Estonia',
                'Ethiopia',
                'European-Union',
                'Falkland-Islands',
                'Faroes',
                'Fiji',
                'Finland',
                'France',
                'French-Polynesia',
                'French-Southern-Territories',
                'Gabon',
                'Gambia',
                'Georgia',
                'Germany',
                'Ghana',
                'Gibraltar',
                'GoSquared',
                'Greece',
                'Greenland',
                'Grenada',
                'Guam',
                'Guatemala',
                'Guernsey',
                'Guinea-Bissau',
                'Guinea',
                'Guyana',
                'Haiti',
                'Honduras',
                'Hong-Kong',
                'Hungary',
                'Iceland',
                'India',
                'Indonesia',
                'Iran',
                'Iraq',
                'Ireland',
                'Isle-of-Man',
                'Israel',
                'Italy',
                'Jamaica',
                'Japan',
                'Jersey',
                'Jordan',
                'Kazakhstan',
                'Kenya',
                'Kiribati',
                'Kosovo',
                'Kuwait',
                'Kyrgyzstan',
                'Laos',
                'Latvia',
                'Lebanon',
                'Lesotho',
                'Liberia',
                'Libya',
                'Liechtenstein',
                'Lithuania',
                'Luxembourg',
                'Macau',
                'Macedonia',
                'Madagascar',
                'Malawi',
                'Malaysia',
                'Maldives',
                'Mali',
                'Malta',
                'Mars',
                'Marshall-Islands',
                'Martinique',
                'Mauritania',
                'Mauritius',
                'Mayotte',
                'Mexico',
                'Micronesia',
                'Moldova',
                'Monaco',
                'Mongolia',
                'Montenegro',
                'Montserrat',
                'Morocco',
                'Mozambique',
                'Myanmar',
                'NATO',
                'Nagorno-Karabakh',
                'Namibia',
                'Nauru',
                'Nepal',
                'Netherlands-Antilles',
                'Netherlands',
                'New-Caledonia',
                'New-Zealand',
                'Nicaragua',
                'Niger',
                'Nigeria',
                'Niue',
                'Norfolk-Island',
                'North-Korea',
                'Northern-Cyprus',
                'Northern-Mariana-Islands',
                'Norway',
                'Olympics',
                'Oman',
                'Pakistan',
                'Palau',
                'Palestine',
                'Panama',
                'Papua-New-Guinea',
                'Paraguay',
                'Peru',
                'Philippines',
                'Pitcairn-Islands',
                'Poland',
                'Portugal',
                'Puerto-Rico',
                'Qatar',
                'Red-Cross',
                'Republic-of-the-Congo',
                'Reunion',
                'Romania',
                'Russia',
                'Rwanda',
                'Saint-Barthelemy',
                'Saint-Helena',
                'Saint-Kitts-and-Nevis',
                'Saint-Lucia',
                'Saint-Martin',
                'Saint-Vincent-and-the-Grenadines',
                'Samoa',
                'San-Marino',
                'Sao-Tome-and-Principe',
                'Saudi-Arabia',
                'Scotland',
                'Senegal',
                'Serbia',
                'Seychelles',
                'Sierra-Leone',
                'Singapore',
                'Sint-Maarten',
                'Slovakia',
                'Slovenia',
                'Solomon-Islands',
                'Somalia',
                'Somaliland',
                'South-Africa',
                'South-Georgia-and-the-South-Sandwich-Islands',
                'South-Korea',
                'South-Ossetia',
                'South-Sudan',
                'Spain',
                'Sri-Lanka',
                'Sudan',
                'Suriname',
                'Swaziland',
                'Sweden',
                'Switzerland',
                'Syria',
                'Taiwan',
                'Tajikistan',
                'Tanzania',
                'Thailand',
                'Togo',
                'Tokelau',
                'Tonga',
                'Trinidad-and-Tobago',
                'Tunisia',
                'Turkey',
                'Turkmenistan',
                'Turks-and-Caicos-Islands',
                'Tuvalu',
                'US-Virgin-Islands',
                'Uganda',
                'Ukraine',
                'United-Arab-Emirates',
                'United-Kingdom',
                'United-Nations',
                'United-States',
                'Unknown',
                'Uruguay',
                'Uzbekistan',
                'Vanuatu',
                'Vatican-City',
                'Venezuela',
                'Vietnam',
                'Wales',
                'Wallis-And-Futuna',
                'Western-Sahara',
                'Yemen',
                'Zambia',
                'Zimbabwe'
              ];
    return (
        <div>
          <div style={stylemain} className='chromascreen'>
            <title>mkhud</title>
            <section className='cards'>
              <LeftCard teamtag={teamTagPlayerOne ? teamTagPlayerOne : ''} player={namePlayerOne ? namePlayerOne : 'PlayerOne'} countryflag={flagPlayerOne ? flagPlayerOne : 'Abkhazia'} score={scorePlayerOne ? scorePlayerOne : '0'} isloser={isLoserPlayerOne}></LeftCard>
              <RightCard teamtag={teamTagPlayerTwo ? teamTagPlayerTwo : ''} player={namePlayerTwo ? namePlayerTwo : 'PlayerTwo'} countryflag={flagPlayerTwo ? flagPlayerTwo : 'Abkhazia'} score={scorePlayerTwo ? scorePlayerTwo : '0'} isloser={isLoserPlayerTwo}></RightCard>
            </section>
            <MatchLabel Mlabel={matchLabel ? matchLabel : 'Pools A1'}></MatchLabel>
            <section className='merchan-area'>
              <MerchanSlider></MerchanSlider>
            </section>
          </div>
          <div className='configs'>
              <section>
                <h2>General Settings</h2>
                <ul>
                  <li><span>Chroma Key Background</span><input type='color' onChange={backgroundChange} defaultValue='#00FF00'/></li>
                  <li><span>Match label</span><input type='text' onChange={MatchLabelChange}></input></li>
                </ul>
              </section>
              <section>
                <h2>Player 1 Data</h2>
                <ul>
                  <li><span>Name</span><input type='text' onChange={NamePlayerOneChange}></input></li>
                  <li><span>Team tag</span><input type='text' onChange={TeamTagPlayerOneChange}></input></li>
                  <li><span>Flag</span>
                      <select onChange={FlagPlayerOneChange}>
                        {flags.map(function(flag) {
                          return <option value={flag}>{flag}</option>;
                        })}
                      </select>
                  </li>
                  <li><span>Loser bracket</span><button onClick={IsLoserPlayerOneChange}>{isLoserPlayerOne ? 'ON' : 'OFF'}</button></li>
                  <li><span>Score</span><input type='number' onChange={ScorePlayerOneChange} min='0' max='10' defaultValue='0'></input></li>
                </ul>
              </section>
              <section>
                <h2>Player 2 Data</h2>
                <ul>
                  <li><span>Name</span><input type='text' onChange={NamePlayerTwoChange}></input></li>
                  <li><span>Team tag</span><input type='text' onChange={TeamTagPlayerTwoChange}></input></li>
                  <li><span>Flag</span>
                      <select onChange={FlagPlayerTwoChange}>
                        {flags.map(function(flag) {
                          return <option value={flag}>{flag}</option>;
                        })}
                      </select>
                  </li>
                  <li><span>Loser bracket</span><button onClick={IsLoserPlayerTwoChange}>{isLoserPlayerTwo ? 'ON' : 'OFF'}</button></li>
                  <li><span>Score</span><input type='number' onChange={ScorePlayerTwoChange} min='0' max='10' defaultValue='0'></input></li>
                </ul>
              </section>
            </div>
        </div>
  );
}
