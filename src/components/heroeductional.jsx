import { Link } from "react-router-dom";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function HeroEductional() {
   React.useEffect(() => {
             AOS.init({ duration: 1200, once: true });
           }, []);

  return (
    <>
    
  <div className="educational">
    <nav className="sequence">
     <Link to="/">الرئيسية</Link> &gt;
      <span>التأهيل التعليمي</span>
    </nav>

    <div className="hero-section">
      <div className="hero-content">
        <h1 data-aos="fade-down">التأهيل التعليمي</h1>
        <p data-aos="fade-up">ابدأ رحلتك التعليمية بخطوات صغيرة، موارد سهلة، ونصائح عملية</p>
      <img 
  data-aos="zoom-in" 
  src="/images/10058487.png" 
  alt="التأهيل التعليمي" 
  class="hero-image"
/>

      </div>
    </div>
    </div>
    </>
  );
}
