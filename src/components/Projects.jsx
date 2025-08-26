// src/components/Projects.jsx

import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/AbhayR1104/repos?sort=updated&direction=desc');
        const data = await response.json();
        const filteredRepos = data;
        setRepos(filteredRepos);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {loading ? (
          <p>Loading projects from GitHub...</p>
        ) : (
          repos.map(repo => (
            <ProjectCard key={repo.id} repo={repo} />
          ))
        )}
      </div>
    </section>
  );
}

export default Projects;