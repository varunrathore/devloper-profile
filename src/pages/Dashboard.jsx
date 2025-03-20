import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: 'home', label: 'Dashboard' },
    { id: 'tasks', icon: 'tasks', label: 'Tasks' },
    { id: 'calendar', icon: 'calendar', label: 'Calendar' },
    { id: 'analytics', icon: 'chart-bar', label: 'Analytics' },
    { id: 'profile', icon: 'user', label: 'Profile' },
    { id: 'settings', icon: 'cog', label: 'Settings' }
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h2 className="logo">TodoApp</h2>
          <button 
            className="collapse-btn"
            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
          >
            <i className={`fas fa-${isSidebarCollapsed ? 'chevron-right' : 'chevron-left'}`}></i>
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <Link 
              key={item.id}
              to={`/${item.id === 'dashboard' ? '' : item.id}`}
              className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.id)}
            >
              <i className={`fas fa-${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="avatar">
              <i className="fas fa-user"></i>
            </div>
            <div className="user-details">
              <h4>John Doe</h4>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <div className="dashboard-header">
          <div className="welcome-section">
            <h1>Welcome to Dashboard</h1>
            <p>Hello! We're glad to see you back</p>
          </div>
          <div className="header-actions">
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <i className="fas fa-search"></i>
            </div>
            <div className="user-profile">
              <span className="notification-badge">
                <i className="fas fa-bell"></i>
                <span className="badge">3</span>
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-tasks"></i>
            </div>
            <div className="stat-details">
              <h3>Total Tasks</h3>
              <p className="stat-number">24</p>
              <span className="stat-trend positive">
                <i className="fas fa-arrow-up"></i> 12%
              </span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="stat-details">
              <h3>Completed</h3>
              <p className="stat-number">16</p>
              <span className="stat-trend positive">
                <i className="fas fa-arrow-up"></i> 8%
              </span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="stat-details">
              <h3>Pending</h3>
              <p className="stat-number">8</p>
              <span className="stat-trend negative">
                <i className="fas fa-arrow-down"></i> 5%
              </span>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-plus-circle"></i>
              </div>
              <div className="activity-details">
                <h4>New Task Added</h4>
                <p>Project meeting preparation</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="activity-details">
                <h4>Task Completed</h4>
                <p>Website design review</p>
                <span className="activity-time">4 hours ago</span>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-edit"></i>
              </div>
              <div className="activity-details">
                <h4>Task Updated</h4>
                <p>Client presentation modified</p>
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