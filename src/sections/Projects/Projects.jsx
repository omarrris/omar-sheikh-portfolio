import styles from './ProjectsStyles.module.css';
import futurefund from '../../assets/futurefund.png'
import moodle from '../../assets/moodle.png'
import chatbot from '../../assets/chatbot.png'
import maxlift from '../../assets/maxlift.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={futurefund}
          link="https://github.com/omarrris/future-fund"
          h3="Future Fund"
          p="Personal Finance App"
        />
        <ProjectCard
          src={moodle}
          link="https://github.com/omarrris/moodle-learning"
          h3="Moodle"
          p="Comprehensive E-Learning App"
        />
        <ProjectCard
          src={chatbot}
          link="https://github.com/omarrris/openai-chatbot"
          h3="Chatbot"
          p="OpenAI Chatbot"
        />
        <ProjectCard
          src={maxlift}
          link="https://github.com/omarris"
          h3="MaxLift"
          p="Weightlifting App"
        />
      </div>
    </section>
  );
}

export default Projects;