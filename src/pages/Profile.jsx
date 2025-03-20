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
            <p>Experienced IT Professional with 6+ years of expertise in Full Stack Development using Laravel and Angular. Successfully delivered scalable web applications and APIs for clients across the UK, US, and South Africa, improving system efficiency by 30%. Proficient in AWS deployment, payment gateway integration (Stripe, PayPal), and optimizing performance for high-traffic applications.</p>
          </div>
          <div className="profile-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
          <h2><i className="fas fa-laptop-code"></i> Skills</h2>
          <div className="skills-grid">
             {/* Backend Development */}
             <div className="skill-item">
              <i className="fab fa-php"></i>
              <span>PHP</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-laravel"></i>
              <span>Laravel</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-database"></i>
              <span>MySql</span>
            </div>

            {/* Frontend Development */}
            <div className="skill-item">
              <i className="fab fa-react"></i>
              <span>React.js</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-react"></i>
              <span>Angular</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-js"></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-html5"></i>
              <span>HTML5</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-css3-alt"></i>
              <span>CSS3</span>
            </div>

            {/* Laravel Features */}
            <div className="skill-item">
              <i className="fas fa-database"></i>
              <span>AWS</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-table"></i>
              <span>Nginx</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-arrows-alt-v"></i>
              <span>Apache</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-shield-alt"></i>
              <span>Docker</span>
            </div>

            {/* API & Security */}
            <div className="skill-item">
              <i className="fas fa-exchange-alt"></i>
              <span>RESTful APIs</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-key"></i>
              <span>JWT</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-passport"></i>
              <span>Passport</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-lock"></i>
              <span>Sanctum</span>
            </div>

            {/* Development Practices */}
            <div className="skill-item">
              <i className="fas fa-bug"></i>
              <span>Debugging</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-exclamation-triangle"></i>
              <span>Error Handling</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-file-alt"></i>
              <span>Logging</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-tachometer-alt"></i>
              <span>Performance</span>
            </div>

            {/* Advanced Concepts */}
            <div className="skill-item">
              <i className="fas fa-layer-group"></i>
              <span>Middleware</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-memory"></i>
              <span>Caching</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-tasks"></i>
              <span>Queues</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-puzzle-piece"></i>
              <span>Problem-Solving</span>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2><i className="fas fa-project-diagram"></i> Key Projects & Achievements</h2>
          <div className="projects-grid">
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
              <h3>Health Management System - Latus Group UK</h3>
              <p className="project-tech">Laravel, Angular, Healthcare Industry</p>
              <ul className="project-highlights">
                <li>Optimized support ticket system, resulting in a 25% reduction in support ticket issues</li>
                <li>Enhanced Occupational Health and Health Surveillance features for UK-based healthcare operations</li>
                <li>Implemented critical features improving operational efficiency in healthcare management</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Learning Management System</h3>
              <p className="project-tech">Laravel, Stripe, AWS</p>
              <ul className="project-highlights">
                <li>Built a comprehensive LMS with Stripe payment integration</li>
                <li>Reduced transaction processing time by 30%</li>
                <li>Implemented real-time notifications increasing user engagement by 40%</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Bank Integration System</h3>
              <p className="project-tech">Laravel, RESTful APIs</p>
              <ul className="project-highlights">
                <li>Developed APIs for seamless integration with major banks including Bank of Baroda and UCO Bank</li>
                <li>Implemented secure data exchange protocols</li>
                <li>Enhanced system reliability through AWS infrastructure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2><i className="fas fa-briefcase"></i> Experience</h2>
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
                <li>Ensuring compliance with security standards while implementing payment gateways and other critical functionalities.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>PHP Laravel Developer</h3>
                <span className="company">GoMilestone</span>
                <span className="duration">Mar 2021 – May 2024 (3 years 3 months)</span>
              </div>
              <ul className="experience-details">
                <li>Developed APIs for lender-bank integrations, enabling seamless data exchange with major banks (Bank of Baroda, UCO Bank, etc.).</li>
                <li>Built a Learning Management System (LMS) with Stripe integration, reducing transaction processing time by 30%.</li>
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
            <p><i className="fas fa-map-marker-alt"></i> Location, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 