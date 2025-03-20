import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-chart-line', label: 'Dashboard' },
    { id: 'profile', icon: 'fas fa-user', label: 'Profile' }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menuId) => {
    setActiveMenuItem(menuId);
    if (menuId === 'profile') {
      navigate('/profile');
    }
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.sidebar') && !event.target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="dashboard-layout">
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="logo">DevBoard</h1>
          <button 
            className="collapse-btn" 
            onClick={toggleSidebar}
            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <i className={`fas ${isSidebarCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-item ${activeMenuItem === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick(item.id);
              }}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="avatar">
              <i className="fas fa-user"></i>
            </div>
            <div className="user-details">
              <h4>John Doe</h4>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-header">
          <div className="welcome-section">
            <h1>Welcome back, John!</h1>
            <p>Here's what's happening with your projects today.</p>
          </div>
          <div className="header-actions">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input 
                type="text" 
                placeholder="Search..." 
                aria-label="Search"
              />
            </div>
            <div className="notification-badge">
              <i className="fas fa-bell"></i>
              <span className="badge">3</span>
            </div>
          </div>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-tasks"></i>
            </div>
            <div className="stat-details">
              <h3>Total Tasks</h3>
              <div className="stat-number">248</div>
              <div className="stat-trend positive">
                <i className="fas fa-arrow-up"></i>
                <span>12.5%</span>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="stat-details">
              <h3>Completed</h3>
              <div className="stat-number">186</div>
              <div className="stat-trend positive">
                <i className="fas fa-arrow-up"></i>
                <span>8.2%</span>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="stat-details">
              <h3>In Progress</h3>
              <div className="stat-number">62</div>
              <div className="stat-trend negative">
                <i className="fas fa-arrow-down"></i>
                <span>3.8%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-code-branch"></i>
              </div>
              <div className="activity-details">
                <h4>New Repository Created</h4>
                <p>Created a new repository for the E-commerce project</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="activity-details">
                <h4>Task Completed</h4>
                <p>Implemented user authentication system</p>
                <span className="activity-time">4 hours ago</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-comment"></i>
              </div>
              <div className="activity-details">
                <h4>New Comment</h4>
                <p>Left a review on the API documentation</p>
                <span className="activity-time">6 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 