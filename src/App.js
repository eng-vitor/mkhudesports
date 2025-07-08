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
    const [flagPlayerOne, setFlagPlayerOne] = useState('');
    const [isLoserPlayerOne, setIsLoserPlayerOne] = useState(false);

    const backgroundChange = (e) => { setBgColorData(e.target.value); };
    const TeamTagPlayerOneChange = (e) => { setTeamTagPlayerone(e.target.value); };
    const NamePlayerOneChange = (e) => { setNamePlayerOne(e.target.value);};
    const FlagPlayerOneChange = (e) => { setFlagPlayerOne(e.target.value);};
    const IsLoserPlayerOneChange = (e) => { setIsLoserPlayerOne(!isLoserPlayerOne);};

    console.log(flagPlayerOne);
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
              <LeftCard teamtag={teamTagPlayerOne ? teamTagPlayerOne : 'TeamOne'} player={namePlayerOne ? namePlayerOne : 'PlayerOne'} countryflag={flagPlayerOne ? flagPlayerOne : 'Abkhazia'} score='0' isloser={isLoserPlayerOne}></LeftCard>
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
              <select onChange={FlagPlayerOneChange}>
                {flags.map(function(flag) {
                  return <option value={flag}>{flag}</option>;
                })}
              </select>
              <span>Loser bracket</span>
              <button onClick={IsLoserPlayerOneChange}>{isLoserPlayerOne ? 'ON' : 'OFF'}</button>
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
