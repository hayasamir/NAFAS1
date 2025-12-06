import { Link } from "react-router-dom";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../social.css"
export default function HeroSocial() {
   React.useEffect(() => {
             AOS.init({ duration: 1200, once: true });
           }, []);

  return (
    <>
    <div className="social">
        <nav className="sequence">
        <Link to="/">الرئيسية</Link> &gt;
            <span>التأهيل الاجتماعي</span>
        </nav>

        <div className="hero-section">
            <div className="hero-content">
                <h1 data-aos="fade-down">التأهيل الاجتماعي</h1>
                <p data-aos="fade-up">بناء علاقات صحية وتطوير مهارات التواصل الاجتماعي</p>
                <img data-aos="zoom-in"
                    src="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?w=1000&t=st=1700000000~exp=1700003600~hmac=1234567890"
                    alt="التواصل الاجتماعي" className="hero-image"/>
            </div>
        </div>
        </div>

    </>
  )}