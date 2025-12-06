import { Link } from "react-router-dom";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../psychological.css";
export default function HeroSection(){
      React.useEffect(() => {
        AOS.init({ duration: 1200, once: true });
      }, []);
    
    return(
<>
<div className="psychological">
        <nav className="sequence" aria-label="مسار التنقل">
      <Link to="/">الرئيسية</Link> &gt;&gt;
            <span>التأهيل النفسي</span>
        </nav>

        <div className="hero-section">
            <div className="hero-content">
                <h1 data-aos="fade-down">التأهيل النفسي</h1>
                <p data-aos="fade-up">ابدأ رحلتك نحو القوة النفسية والطمأنينة</p>
                <img data-aos="zoom-in" src="images/hand-drawn-visit-psychologist-concept.png" alt="رحلة التأهيل النفسي والاسترخاء الذهني" className="hero-image"/>
            </div>
        </div>

        <div className="quick-links">
            <div className="container">
                <h3>الموارد المتاحة</h3>
                <div className="quick-links-container">
                    <Link to="/HeroAudio" className="quick-link-card">
                        <i className="fa-solid fa-podcast" style={{fontSize: "2rem", color: "#ff6b81", marginBottom: "0.5rem"}}></i>
                        <h4 style={{color:"#ff6b81", margin:" 0.5rem"}}>الموارد الصوتية</h4>
                        <p style={{color:"#666", fontSize:" 0.9rem"}}>استمع لمقاطع صوتية للاسترخاء</p>
                    </Link>
                    
                    <Link to="/HeroInstructions" className="quick-link-card">
                        <i className="fa-solid fa-lightbulb" style={{fontSize: "2rem", color:" #ff6b81", marginBottom: "0.5rem"}}></i>
                        <h4 style={{color:" #ff6b81", margin: "0.5rem 0"}}> الارشادات الهامة </h4>
                        <p style={{color:" #666", fontSize:" 0.9rem"}}>نصائح عملية للتعامل مع المشاعر</p>
                      </Link>
                </div>
            </div>
        </div>
        </div>
        
</>
    );
}
