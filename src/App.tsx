import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-icons/chevron';
import { ExternalLink } from 'react-icons/external-link';

// Sample data with models, key concepts, etc.
const models = [
  {
    name: "Constructivist Learning Theory",
    keyConcepts: ["Knowledge construction", "Active learning", "Experiential learning", "Learner-centered"],
    application: "Understanding how students construct musical knowledge and skills through interaction and reflection.",
    diagram: (
      <div>
        <p><strong>Flowchart Overview:</strong></p>
        <ul>
          <li>Start: Student interacts with musical content</li>
          <li>Active engagement: Student applies previous knowledge</li>
          <li>Reflection: Student reflects on the learning experience</li>
          <li>Outcome: Knowledge construction</li>
          <li>Repeat: Continuous cycle of interaction, engagement, and reflection</li>
        </ul>
      </div>
    ),
    mainPaper: <a href="https://www.taylorfrancis.com/books/mono/10.4324/9780203992189/science-education-psychology-child-jean-piaget" target="_blank" className="text-blue-500 hover:text-blue-700">Piaget, J. (1970). Science of education and the psychology of the child</a>,
    musicStudies: [
      <a href="https://journals.sagepub.com/doi/abs/10.1177/0255761407088498" target="_blank" className="text-blue-500 hover:text-blue-700">Wiggins, R. A. (2008). Constructivism and music learning in elementary school education</a>
    ]
  },
  // Add more models here in a similar format
];

const ModelCard: React.FC<{ model: any }> = ({ model }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="model-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '15px' }}>
      <div className="model-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{model.name}</h3>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {isExpanded && (
        <div className="model-content">
          <h4>Key Concepts:</h4>
          <ul>
            {model.keyConcepts.map((concept: string, index: number) => (
              <li key={index}>{concept}</li>
            ))}
          </ul>
          <h4>Application in Music Education:</h4>
          <p>{model.application}</p>
          {model.diagram && (
            <div>
              <h4>Model Diagram:</h4>
              {model.diagram}
            </div>
          )}
          <h4>Main Reference:</h4>
          <p>{model.mainPaper}</p>
          <h4>Relevant Music Education Studies:</h4>
          <ul>
            {model.musicStudies.map((study: any, index: number) => (
              <li key={index}>{study}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const MusicEducationModels: React.FC = () => {
  return (
    <div className="model-list">
      {models.map((model, index) => (
        <ModelCard key={index} model={model} />
      ))}
    </div>
  );
};

export default MusicEducationModels;
