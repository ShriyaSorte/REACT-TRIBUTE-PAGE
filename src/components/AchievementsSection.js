import React from 'react';

const AchievementsSection = ({ achievements }) => {
  return (
    <section className="achievements-section">
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
};

export default AchievementsSection;
