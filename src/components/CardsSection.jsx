import { Link } from "react-router-dom";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

export default function CardsSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div style={{backgroundColor:"#c3efed", maxWidth:"100vw"}}>
    <div className="container">
            <h2 data-aos="fade-up" style={{color:"#555555"}}>
                !لنبدأ رحلة التأهيل معاً
            </h2>
            <div className="row cardes justify-content-center">
                <div className="col-12 col-md-6 col-lg-4 mb-3" data-aos="fade-right">
                    <div className="card-custom">
                        <i className="fa-solid fa-brain" style={{color:"rgb(228, 112, 112)"}}></i>
                        <Link to="/Psychological">
                            <h3>التأهيل النفسي</h3>
                        </Link>
                        <p>خطوات لمساعدتك على التوازن النفسي</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-3" data-aos="fade-up">
                    <div className="card-custom">
                        <i className="fa-solid fa-hands-praying" style={{color:"rgb(255, 194, 194)"}}></i>
                        <Link to="/social">
                            <h3>التأهيل الاجتماعي</h3>
                        </Link>
                        <p>تطوير مهاراتك الاجتماعية والتواصل</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-3" data-aos="fade-left">
                    <div className="card-custom">
                        <i className="fa-solid fa-book-open-reader" style={{color:"rgb(112, 228, 151)"}}></i>
                        <Link to="/educational">
                            <h3>التأهيل التعليمي</h3>
                        </Link>
                        <p>مصادر تعليمية ودعم دراسي</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
  );
}
