import { Link } from "react-router-dom";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../instructions.css"
export default function HeroInstructions() {
   React.useEffect(() => {
             AOS.init({ duration: 1200, once: true });
           }, []);

  return (
    <section className="instructions">
     
      <nav className="sequence">
        <Link to="/">الرئيسية</Link> &gt;
        <Link to="/psychological">التأهيل النفسي</Link> &gt;
        <Link to="/psychological">التمارين النفسية</Link> &gt;
            <Link to="/HeroAudio">الموارد الصوتية</Link>&gt;
        <span>الإرشادات الهامة</span> 
    
      </nav>

     
      <div className="hero-section">
        <div className="hero-content">
          <h1 data-aos="fade-down">الإرشادات الهامة</h1>
          <p data-aos="fade-up">خطوات صغيرة... تصنع فرقًا كبيرًا في يومك</p>

          <p
            data-aos="fade-up"
            style={{
              fontSize: "1.5rem",
              color: "var(--light-text)",
              marginTop: "1rem",
            }}
          >
            في أوقات كثيرة بنحتاج صوت يرشدنا، وكلمة تطمّن قلوبنا
            <br />
            بهالصفحة جمعنا أهم الإرشادات النفسية اللي بتساعدك تتعامل مع نفسك
            ومع الحياة بلطف
          </p>

          <img
            data-aos="zoom-in"
            src="images/4584502.png"
            alt="الإرشادات الهامة"
            className="hero-image"
          />
        </div>
      </div>
      </section>
      );
      }