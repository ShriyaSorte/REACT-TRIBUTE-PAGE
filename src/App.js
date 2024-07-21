import React from 'react';
import Header from './components/Header';
import ImageSection from './components/ImageSection';
import BioSection from './components/BioSection';
import AchievementsSection from './components/AchievementsSection';
import TimelineSection from './components/TimelineSection';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const person = {
    name: 'A.P.J. ABDUL KALAM',
    imageUrl: process.env.PUBLIC_URL + '/assets/a.p.j..jpeg',
    altText: 'Person Image',
    bio: 'A very simple person who lived an unpretentious lifestyle. He had a keen interest in literature and wrote poems. He never married. He always faced media himself for his failures while let others address for the success. He remained active till the very end. He died while delivering a lecture at the IIM.',
    achievements: ['In 1960, Dr Kalam joined the Defence Research and Development Organisation (DRDO) (DRDO) after he finished his graduation from the Madras Institute of Technology.', 'Dr Kalam was selected as the project director for SLV-III, India’s first indigenous satellite launch vehicle, after he joined the Indian Space Research Organisation (ISRO).', 'After SLV-III was successful in launching the satellite Rohini to orbit in July 1980, Dr Kalam started expanding India’s space programme on a wider scale.'],
    timeline: [
      { year: '1931', description: 'Born Avul Pakir Jainulabdeen Abdul Kalam on October 15, in Rameswaram, Tamil Nadu.' },
      { year: '1954', description: 'Graduates in Physics from Saint Joseph’s College, Tiruchirappalli, in 1954.'},
      { year: '1960', description: 'Gains degree in Aeronautical Engineering from Madras Institute of Technology.' },
    ],
    footerMessage: 'Created by Shriya Sorte @ 2024',
  };

  return (
    <div className="App">
      <Header title={`Tribute to ${person.name}`} />
      <ImageSection imageUrl={person.imageUrl} altText={person.altText} />
      <BioSection bio={person.bio} />
      <AchievementsSection achievements={person.achievements} />
      <TimelineSection timeline={person.timeline} />
      <Footer message={person.footerMessage} />
    </div>
  );
};

export default App;
