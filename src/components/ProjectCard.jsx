import { useState, useEffect } from 'react';

// Color mapping for languages
const languageColors = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  TypeScript: '#2b7489',
  'Jupyter Notebook': '#DA5B0B',
  default: '#6e7681'
};

// Language legend component (unchanged)
function LanguageLegend({ languages, totalBytes }) {
  return (
    <div className="language-legend">
      {Object.entries(languages).map(([lang, bytes]) => {
        const percentage = ((bytes / totalBytes) * 100).toFixed(1);
        const color = languageColors[lang] || languageColors.default;
        if (percentage < 0.1) return null;
        return (
          <div key={lang} className="legend-item">
            <span className="legend-color-dot" style={{ backgroundColor: color }}></span>
            <span className="legend-text">{lang} <span className="legend-percentage">{percentage}%</span></span>
          </div>
        );
      })}
    </div>
  );
}

// Main ProjectCard component
function ProjectCard({ repo }) {
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    async function fetchLanguages() {
      if (repo.languages_url) {
        try {
          const response = await fetch(repo.languages_url);
          const data = await response.json();
          setLanguages(data);
        } catch (error) {
          console.error("Failed to fetch languages for repo:", repo.name, error);
        }
      }
    }
    fetchLanguages();
  }, [repo.languages_url, repo.name]);

  const totalBytes = Object.values(languages).reduce((acc, bytes) => acc + bytes, 0);

  return (
    <div className="project-card">
      <div> {/* Added a wrapper for top content */}
        <h3>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </h3>
        {/* The description is now displayed in full */}
        <p className="project-description">{repo.description || 'No description available.'}</p>
        
        {/* New section for GitHub Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="project-topics">
            {repo.topics.map(topic => (
              <span key={topic} className="topic-tag">{topic}</span>
            ))}
          </div>
        )}
      </div>

      {/* Language stats are now at the very bottom */}
      {totalBytes > 0 && (
        <div className="language-stats">
          <LanguageLegend languages={languages} totalBytes={totalBytes} />
        </div>
      )}
    </div>
  );
}

export default ProjectCard;