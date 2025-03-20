import React from 'react';
import './Profile.css';
import profileImage from '../assets/profile-image.jpg';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-cover">
          <div className="profile-avatar">
            <img 
              src={profileImage}
              alt="Vardaan Thakur"
              className="profile-img"
            />
          </div>
        </div>
        <div className="profile-info">
          <h1>Vardaan Thakur</h1>
          <p className="profile-title">Full Stack Developer</p>
          <div className="about-me">
            <p>Innovative Full Stack Developer with 6+ years of expertise in building enterprise-grade solutions using Laravel, React.js, Angular, and AWS. Proven track record of delivering high-performance web applications and APIs for global clients across the UK, US, and South Africa, consistently achieving 30%+ improvement in system efficiency. Specialized in AWS cloud architecture, and optimizing applications for high-traffic scenarios.</p>
          </div>
          <div className="profile-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vardaan-thakur-68b34a140/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:vardaanthakur786@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2><i className="fas fa-laptop-code"></i> Skills & Projects</h2>
          <div className="section-subtitle">Technical Skills</div>
          <div className="skills-grid">
            {/* Frontend */}
            <div className="skill-item">
              <i className="fab fa-react"></i>
              <span>React.js</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-angular"></i>
              <span>Angular</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-js"></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-bootstrap"></i>
              <span>Bootstrap</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-html5"></i>
              <span>HTML5</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-css3-alt"></i>
              <span>CSS3</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-sass"></i>
              <span>SCSS/SASS</span>
            </div>

            {/* Backend */}
            <div className="skill-item">
              <i className="fab fa-php"></i>
              <span>PHP</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-laravel"></i>
              <span>Laravel</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-code-branch"></i>
              <span>RESTful APIs</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-database"></i>
              <span>SQL</span>
            </div>

            {/* Development Tools */}
            <div className="skill-item">
              <i className="fab fa-git-alt"></i>
              <span>Git</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-aws"></i>
              <span>AWS</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-docker"></i>
              <span>Docker</span>
            </div>

            {/* State Management */}
            <div className="skill-item">
              <i className="fas fa-cube"></i>
              <span>Redux</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-project-diagram"></i>
              <span>Context API</span>
            </div>

            {/* Authentication & Security */}
            <div className="skill-item">
              <i className="fas fa-shield-alt"></i>
              <span>JWT</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-lock"></i>
              <span>OAuth</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-key"></i>
              <span>Sanctum</span>
            </div>

            {/* Database & ORM */}
            <div className="skill-item">
              <i className="fas fa-database"></i>
              <span>MySQL</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-table"></i>
              <span>Eloquent ORM</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-stream"></i>
              <span>Query Builder</span>
            </div>

            {/* Testing & Optimization */}
            <div className="skill-item">
              <i className="fas fa-vial"></i>
              <span>PHPUnit</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-tachometer-alt"></i>
              <span>Performance</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-bug"></i>
              <span>Debugging</span>
            </div>

            {/* Development Concepts */}
            <div className="skill-item">
              <i className="fas fa-code"></i>
              <span>OOP</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-layer-group"></i>
              <span>MVC</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-sitemap"></i>
              <span>Design Patterns</span>
            </div>

            {/* Development Tools */}
            <div className="skill-item">
              <i className="fas fa-terminal"></i>
              <span>Command Line</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-code-branch"></i>
              <span>Version Control</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-tasks"></i>
              <span>Agile/Scrum</span>
            </div>
          </div>

          <div className="section-subtitle">Key Projects</div>
          <div className="projects-grid">

            <div className="project-card">
              <h3>Health Management System - Latus Group UK</h3>
              <p className="project-tech">Laravel, Angular, Healthcare Industry</p>
              <ul className="project-highlights">
                <li>Optimized support ticket system, resulting in a 25% reduction in support ticket issues</li>
                <li>Enhanced Occupational Health and Health Surveillance features for UK-based healthcare operations</li>
                <li>Implemented critical features improving operational efficiency in healthcare management</li>
              </ul>
            </div>
            <div className="project-card">
              <h3>Customer Portal - Ugro Capital</h3>
              <p className="project-tech">React.js, Encryption/Decryption, Security</p>
              <ul className="project-highlights">
                <li>Developed a secure customer portal using React.js with advanced encryption/decryption mechanisms to protect sensitive payload information</li>
                <li>Architected and implemented a base service structure that became the foundation for all bank-related services, improving code reusability and maintenance</li>
                <li>Enhanced system security while maintaining optimal performance for financial transactions</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Learning Management System</h3>
              <p className="project-tech">Laravel, AWS, React.js</p>
              <ul className="project-highlights">
                <li>Built a comprehensive LMS with advanced user management</li>
                <li>Implemented caching strategies reducing load times by 30%</li>
                <li>Integrated real-time notifications increasing user engagement by 40%</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Bank Integration System</h3>
              <p className="project-tech">Laravel, RESTful APIs</p>
              <ul className="project-highlights">
                <li>Developed secure APIs for seamless integration with major banks including Bank of Baroda and UCO Bank</li>
                <li>Implemented robust data exchange protocols</li>
                <li>Enhanced system reliability through AWS infrastructure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2><i className="fas fa-briefcase"></i> Professional Experience</h2>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-header">
                <h3>Full Stack Developer</h3>
                <span className="company">Smart Working</span>
                <span className="duration">May 2024 – Present</span>
              </div>
              <ul className="experience-details">
                <li>Developing and maintaining scalable web applications using Laravel and Angular.</li>
                <li>Leading API integrations to streamline operations and enhance user experience.</li>
                <li>Deploying and managing applications on AWS (S3, CloudFront, EC2, RDS) to improve system reliability.</li>
                <li>Implementing robust security measures and optimizing application performance.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>PHP Laravel Developer</h3>
                <span className="company">GoMilestone</span>
                <span className="duration">Mar 2021 – May 2024 (3 years 3 months)</span>
              </div>
              <ul className="experience-details">
                <li>Developed secure APIs for lender-bank integrations, enabling seamless data exchange with major banks.</li>
                <li>Built a Learning Management System (LMS) with advanced caching and real-time features.</li>
                <li>Managed AWS deployments, improving system performance and scalability.</li>
                <li>Implemented real-time email and SMS notification services, increasing engagement by 40%.</li>
                <li>Used GitHub and AWS CodeCommit for version control.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>PHP Laravel Developer</h3>
                <span className="company">Keen Developers Web Technologies</span>
                <span className="duration">Jun 2019 – Mar 2021 (1 year 10 months)</span>
              </div>
              <ul className="experience-details">
                <li>Developed a Student Learning Material platform using Angular 8 and Laravel APIs for a Norway-based client.</li>
                <li>Built an Event Management System for a South African client using Bootstrap 4, jQuery, and Laravel.</li>
                <li>Contributed to a blockchain project, integrating cryptocurrency wallet functionality.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>PHP CodeIgniter Developer</h3>
                <span className="company">Netpixel Technologies</span>
                <span className="duration">Dec 2018 – May 2019 (6 months)</span>
              </div>
              <ul className="experience-details">
                <li>Built and optimized web applications using CodeIgniter and PHP, improving performance by 25%.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2><i className="fas fa-graduation-cap"></i> Education</h2>
          <div className="education-item">
            <h3>Bachelor's Degree in Information Technology</h3>
            <p>Lovely Professional University</p>
            <span className="education-year">2016 - 2019</span>
          </div>
        </div>

        <div className="profile-section">
          <h2><i className="fas fa-envelope"></i> Contact</h2>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> vardaanthakur786@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Gurugram, Delhi NCR, India</p>
          </div>
        </div>

        {/* Left Column */}
        <div>
          <section className="profile-section about-section">
            <h2><i className="fas fa-user-circle"></i> About Me</h2>
            <div className="about-content">
              <p className="about-summary">
                Dynamic Full Stack Developer with 6+ years of proven expertise in architecting enterprise-level solutions. Recognized for delivering high-impact web applications that drive business transformation across UK, US, and South African markets. Demonstrated track record of enhancing system performance by 30% through innovative architectural solutions and optimization strategies.
              </p>
              
              <div className="key-highlights">
                <div className="highlight-item">
                  <i className="fas fa-rocket"></i>
                  <div>
                    <h4>Technical Innovation</h4>
                    <p>Spearheaded the development of scalable web applications and microservices architecture, resulting in enhanced system reliability and reduced deployment time by 40%.</p>
                  </div>
                </div>
                
                <div className="highlight-item">
                  <i className="fas fa-globe"></i>
                  <div>
                    <h4>Global Impact</h4>
                    <p>Led cross-functional teams in delivering mission-critical solutions for healthcare, finance, and education sectors across three continents, serving 100,000+ users.</p>
                  </div>
                </div>
                
                <div className="highlight-item">
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <h4>System Architecture</h4>
                    <p>Designed and implemented robust system architectures with advanced security protocols, achieving 99.9% uptime and ensuring regulatory compliance across international markets.</p>
                  </div>
                </div>
                
                <div className="highlight-item">
                  <i className="fas fa-cloud"></i>
                  <div>
                    <h4>Cloud Excellence</h4>
                    <p>Mastered AWS cloud infrastructure to build resilient, auto-scaling applications that handle peak loads of 50,000+ concurrent users with zero downtime.</p>
                  </div>
                </div>
              </div>

              <div className="tech-stack">
                <h4>Core Technology Arsenal</h4>
                <div className="tech-tags">
                  <span className="tech-tag"><i className="fab fa-laravel"></i> Laravel Ecosystem</span>
                  <span className="tech-tag"><i className="fab fa-react"></i> React.js</span>
                  <span className="tech-tag"><i className="fab fa-angular"></i> Angular</span>
                  <span className="tech-tag"><i className="fab fa-aws"></i> AWS Cloud</span>
                  <span className="tech-tag"><i className="fab fa-node-js"></i> Node.js</span>
                  <span className="tech-tag"><i className="fas fa-database"></i> MySQL</span>
                  <span className="tech-tag"><i className="fas fa-server"></i> RESTful Architecture</span>
                  <span className="tech-tag"><i className="fas fa-shield-alt"></i> OAuth/JWT Security</span>
                </div>
              </div>

              <div className="expertise-areas">
                <div className="expertise-item">
                  <i className="fas fa-code-branch"></i>
                  <div>
                    <h4>Full Stack Mastery</h4>
                    <p>Blend of front-end finesse and back-end robustness, creating seamless, performant applications that scale. Expert in modern development practices including CI/CD, microservices, and agile methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile; 