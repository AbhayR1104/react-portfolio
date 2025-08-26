import { motion } from 'framer-motion';

// Structured skills object, exactly like your resume
const skillsData = {
  "Programming Languages": ["Python", "Java", "C++", "Kotlin", "SQL", "JavaScript", "Scala", "TypeScript"],
  "Frameworks & Libraries": ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow", "Flask", "React.js", "Node.js"],
  "Big Data & Cloud Technologies": ["Apache Spark", "Hadoop", "Hive", "Kafka", "AWS", "Docker", "Kubernetes"],
  "Data Analytics & Visualization": ["Power BI", "Tableau", "Qlik", "Excel", "Matplotlib", "Seaborn", "Plotly", "Dash"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Room (Android)", "SQLite"],
  "Software Development": ["OOP", "Design Patterns", "REST APIs", "Git", "Agile/Scrum"],
};

// Animation variants for the container to orchestrate the stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Time delay between each child animating in
    },
  },
};

// Animation variants for each individual skill tag
const skillVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills & Technologies</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible" // Animate when the element enters the viewport
              viewport={{ once: true, amount: 0.2 }} // Trigger animation once
            >
              {skills.map(skill => (
                <motion.div
                  key={skill}
                  className="skill-tag"
                  variants={skillVariants}
                  whileHover={{ scale: 1.1, y: -2 }} // The interactive hover effect
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;