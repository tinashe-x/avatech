import React from 'react';
import '../styles/WebsiteTemplates.css';
import WebsiteTemplates1 from '../images/WebsiteTemplates1.jpg';

const WebsiteTemplates = () => {
  return (
    <div className="website-templates">
      <div className="container">
        <h1 className="title">Website Templates</h1>
        <div className="templates">
          <div className="template" id="template-001">
            <div className="image">
              <img src= {WebsiteTemplates1} alt="Website Template 001" />
            </div>
            <div className="info">
              <h2 className="template-title">E-Learning Website</h2>
              <p className="template-description">This E-Learning template is a pre-designed layout and structure for creating an online course or educational program. This includes pages for a syllabus, lessons, assignments, quizzes and tests, and a student dashboard.</p>
              <button className="view-package">View Package</button>
            </div>
          </div>
          <div className="template" id="template-002">
            <div className="image">
              <img src="https://images.unsplash.com/photo-1552554829-249a0d236427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Website Template 002" />
            </div>
            <div className="info">
              <h2 className="template-title">Portfolio Website</h2>
              <p className="template-description">This Portfolio template is a pre-designed layout and structure for creating a website that showcases the work of an individual or organization. This includes pages for a</p>
            </div>
            </div>
            </div>
            </div>
            </div>
)};

export default WebsiteTemplates;