import React from 'react';

const TimelineSection = ({ timeline }) => {
  return (
    <section className="timeline-section">
      <ul>
        {timeline.map((event, index) => (
          <li key={index}>
            <strong>{event.year}:</strong> {event.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TimelineSection;
