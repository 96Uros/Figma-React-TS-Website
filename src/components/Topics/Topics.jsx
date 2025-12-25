import './Topics.css';
import { useState } from 'react';
import {
  topicsFrequencues,
  topicsDaw,
  topicsVocals,
  topicsMixing,
  topicsConsole,
  topicsElement1,
  topicsMastering,
} from '../../assets';

// We created a Topics component that displays a list of topics for a Sound Design course.
// The component uses useState to keep track of the currently displayed image.
// When the user hovers over a topic in the list, the image updates to illustrate the corresponding topic.
// The component imports assets and styling as needed, and is structured to fit into the overall site design.

export default function Topics() {
  const [currentImage, setCurrentImage] = useState(topicsFrequencues);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li
              onMouseEnter={() => setCurrentImage(topicsFrequencues)}
            >
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage(topicsDaw)}>
              Using the DAW
            </li>
            <li onMouseEnter={() => setCurrentImage(topicsVocals)}>
              Vocals processing
            </li>
            <li onMouseEnter={() => setCurrentImage(topicsMixing)}>
              Mixing
            </li>
            <li onMouseEnter={() => setCurrentImage(topicsConsole)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage(topicsMastering)}>
              Mastering
            </li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} />
          </div>
        </div>
        <img src={topicsElement1} className="topicsElement1" />
      </div>
    </section>
  );
}
