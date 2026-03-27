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
            <div className="senior-badge">SNR</div>
          </div>
        </div>
        <div className="profile-info">
          <h1>Vardaan Thakur</h1>
          <p className="profile-title">Senior Backend Engineer | Building Scalable .NET Systems on Azure | Clean Architecture | Full Stack (.NET + React/Angular) | Open to Global Opportunities</p>
          <div className="about-me">
            <p>Senior Full Stack Developer with 7.4+ years of expertise in architecting backend-heavy, API-driven solutions. My career spans from building robust PHP/Laravel systems and complex lender-bank integrations for major Indian financial institutions to designing scalable .NET and Azure cloud-native architectures for international markets.</p>
          </div>
          <div className="profile-social">
            <a href="https://github.com/varunrathore" target="_blank" rel="noopener noreferrer">
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
          <div className="section-subtitle">Backend Core</div>
          <div className="skills-grid">
            <div className="skill-item">
              <i className="fas fa-code"></i>
              <span>ASP.NET Core</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-project-diagram"></i>
              <span>Web API</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-laravel"></i>
              <span>Laravel (PHP)</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-node-js"></i>
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-layer-group"></i>
              <span>EF Core</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-lock"></i>
              <span>JWT Auth</span>
            </div>
          </div>

          <div className="section-subtitle">Frontend Development</div>
          <div className="skills-grid">
            <div className="skill-item">
              <i className="fab fa-react"></i>
              <span>React.js</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-angular"></i>
              <span>Angular 10</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-js"></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-bootstrap"></i>
              <span>Bootstrap 4</span>
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
            <div className="skill-item">
              <i className="fas fa-mouse-pointer"></i>
              <span>jQuery</span>
            </div>
          </div>

          <div className="section-subtitle">Cloud, Database & DevOps</div>
          <div className="skills-grid">
            <div className="skill-item">
              <i className="fab fa-microsoft"></i>
              <span>Azure App Service</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-server"></i>
              <span>Azure SQL / MS SQL</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-aws"></i>
              <span>AWS (EC2/S3/RDS)</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-docker"></i>
              <span>Docker</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-infinity"></i>
              <span>GitHub Actions CI/CD</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-database"></i>
              <span>MySQL</span>
            </div>
          </div>

          <div className="section-subtitle">Software Engineering & Tools</div>
          <div className="skills-grid">
            <div className="skill-item">
              <i className="fas fa-shield-alt"></i>
              <span>SOLID Principles</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-sitemap"></i>
              <span>Clean Architecture</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-file-code"></i>
              <span>Swagger / OpenAPI</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-vial"></i>
              <span>DI / Repository Pattern</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-tasks"></i>
              <span>Agile / Jira</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-robot"></i>
              <span>AI Dev (Antigravity/Cursor)</span>
            </div>
          </div>

          <div className="section-subtitle">Key Projects</div>
          <div className="projects-grid">

            <div className="project-card">
              <h3>Enterprise E-commerce Backend & API</h3>
              <p className="project-tech">ASP.NET Core Web API, JWT Security, Swagger, React (In Progress)</p>
              <ul className="project-highlights">
                <li>Architected a scalable e-commerce infrastructure using ASP.NET Core, focusing on secure transaction handling and high-concurrency product management</li>
                <li>Implemented enterprise-grade JWT Authentication/Authorization workflows, securing critical endpoints for products and user-specific services</li>
                <li>Designed and documented a comprehensive RESTful API suite using Swagger (OpenAPI) for seamless frontend integration and cross-team collaboration</li>
                <li>Engineered robust CRUD services with optimized data access patterns, prepared for high-traffic enterprise scenarios</li>
              </ul>
            </div>
            <div className="project-card">
              <h3>MedTest - Medical Test Management</h3>
              <p className="project-tech">ASP.NET Core, EF Core, Azure, Docker</p>
              <ul className="project-highlights">
                <li>Designed a comprehensive Medical Test Management system using ASP.NET Core Web API with Clean Architecture</li>
                <li>Implemented secure JWT token workflows and robust CRUD APIs for user and test result management</li>
                <li>Successfully containerized the entire application and automated deployment to Azure App Service</li>
              </ul>
            </div>
            <div className="project-card">
              <h3>Interview Preparation System / Study Tracker</h3>
              <p className="project-tech">.NET, React.js, FontAwesome</p>
              <ul className="project-highlights">
                <li>Developed an automated system to pre-load interview topics for .NET and DSA, streamlining study preparation</li>
                <li>Implemented intuitive UI buttons for bulk topic management, significantly reducing manual data entry</li>
                <li>Created a scalable architecture for adding diverse learning modules and category-based filtering</li>
              </ul>
            </div>
            <div className="project-card">
              <h3>Health Management System (Latus Group UK)</h3>
              <p className="project-tech">.NET, Laravel, Angular, Cloud Infrastructure</p>
              <ul className="project-highlights">
                <li>Architected and scaled the core Occupational Health and Surveillance infrastructure serving the UK healthcare market, ensuring mission-critical reliability</li>
                <li>Led the redesign of the support ticket platform, achieving a 25% reduction in issues through optimized backend performance and preventative architecture</li>
                <li>Implemented complex international healthcare compliance features, streamlining operations across multiple clinical settings and 10,000+ users</li>
                <li>Drove system-wide performance improvements to handle increased UK health surveillance data volumes with 99.9% uptime</li>
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
                <li>Providing Occupational Health Solutions; developing and maintaining scalable web applications using .NET, Laravel and Angular.</li>
                <li>Engineer backend services using ASP.NET Core / Web APIs following Clean Architecture principles for maximum scalability.</li>
                <li>Design and implement RESTful APIs consumed by React and Angular frontend applications.</li>
                <li>Architect Docker containerization workflows to ensure consistent local development and cloud-ready deployments.</li>
                <li>Manage relational data modeling and migrations using EF Core and Azure SQL Database.</li>
                <li>Automate build and deployment workflows by implementing CI/CD pipelines using GitHub Actions.</li>
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
                I have successfully delivered mission-critical applications across finance, healthcare, and blockchain for global clients in the UK, US, Norway, and South Africa. With a core focus on Clean Architecture, security, and high-performance system integration, I am dedicated to building cloud-ready enterprise systems and growing toward senior technical leadership.
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
                  <span className="tech-tag"><i className="fas fa-code"></i> ASP.NET Core</span>
                  <span className="tech-tag"><i className="fab fa-laravel"></i> Laravel</span>
                  <span className="tech-tag"><i className="fab fa-react"></i> React.js</span>
                  <span className="tech-tag"><i className="fab fa-angular"></i> Angular</span>
                  <span className="tech-tag"><i className="fab fa-microsoft"></i> Azure Cloud</span>
                  <span className="tech-tag"><i className="fab fa-aws"></i> AWS</span>
                  <span className="tech-tag"><i className="fab fa-docker"></i> Docker</span>
                  <span className="tech-tag"><i className="fas fa-robot"></i> AI-Assisted Dev</span>
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