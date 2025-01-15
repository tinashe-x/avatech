import React from "react";
import "../styles/TemplateShowcase.css";
import WebsiteTemplates1 from '../images/WebsiteTemplates1.jpg';
import WebsiteTemplates2 from '../images/WebsiteTemplates2.jpg';


const TemplateShowcase = () => {
  return (
    <div>
      <header className="header-container">
          <h1 className="header-title">Website Templates</h1>
        </header>
    
    <div className="template-showcase">
      {/* First Screen */}
      <div className="screen">
        {/* Left Section */}
        <div className="screen-left">
          <img
            src= {WebsiteTemplates1} // Replace with your image path
            alt="Template 1"
            className="screen-image"
          />
        </div>

        {/* Right Section */}
        <div className="screen-right light-bg">
          <h3>No. 001</h3>
          <h2>E-Learning Website</h2>
          <p>
            This E-Learning template is a pre-designed layout and structure for
            creating an online course or educational program. This includes
            pages for a syllabus, lessons, assignments, quizzes and tests, and
            a student dashboard.
          </p>
          <button className="view-package-btn">View Package</button>
        </div>
      </div>

      {/* Second Screen */}
      <div className="screen">
        {/* Left Section */}
        <div className="screen-left dark-bg">
          <h3>No. 002</h3>
          <h2>Portfolio Website</h2>
          <p>
            This Portfolio template is a pre-designed layout and structure for
            creating a website that showcases the work of an individual or
            organization. This includes pages for a homepage, an about section,
            a contact page, and a portfolio or gallery section where the
            individual’s or organization’s work is displayed.
          </p>
          <button className="view-package-btn light-btn">View Package</button>
        </div>

        {/* Right Section */}
        <div className="screen-right">
          <img
            src= {WebsiteTemplates2} // Replace with your image path
            alt="Template 2"
            className="screen-image2"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default TemplateShowcase;
