import { Link } from "react-router-dom";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../audio.css"
export default function HeroAudio() {
    React.useEffect(() => {
           AOS.init({ duration: 1200, once: true });
         }, []);
  return (
    <section className="audio-resources">
      <nav className="sequence">
        <Link to="/">الرئيسية</Link> &gt;
        <Link to="/psychological">التأهيل النفسي</Link> &gt;
        <Link to="/psychological">التمارين النفسية</Link> &gt;
        <span>الموارد الصوتية</span> &gt;
        <Link to="/HeroInstructions">الإرشادات الهامة</Link>
      </nav>
    
      <div className="hero-section">
        <div className="hero-content">
          <h1 data-aos="fade-down">الموارد الصوتية</h1>
          <p data-aos="fade-up">
            استمع لمقاطع صوتية قصيرة تساعدك على التهدئة، التخلص من القلق، وتنمية التفكير الإيجابي
          </p>
          <img
            data-aos="zoom-in"
            src="public/images/5033613.png"
            alt="الموارد الصوتية"
            className="hero-image"
          />
        </div>
      </div>

      <div className="audio-section" style={{ backgroundColor: "#f8f9fa", padding: "4rem 0" }}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">
            مقاطع صوتية للاسترخاء والتحفيز النفسي
          </h2>
          <p className="section-subtitle" data-aos="fade-up">
            استمع لهذه المقاطع في أي وقت تحتاج فيه للهدوء والطمأنينة
          </p>
        </div>
      </div>
    </section>
  );
}
