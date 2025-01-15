import React from 'react';
import '../styles/ComingSoon.css';
import { IoMdMail, IoMdCheckmark } from "react-icons/io";

function ComingSoon() {
  return (
    <section className="soon-offer">
      <div className="soon-content">
        <IoMdMail className="announcement-icon" />
        <h1>Coming Soon</h1>
        <p>More Websites Templates Loading…</p>
        <button className="soon-button">
          <IoMdCheckmark className="tick-icon" />
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default ComingSoon;
