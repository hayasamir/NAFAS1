import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const sleepPoints = [
  {
    img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    title: "روتين ثابت",
    description: "اذهب إلى الفراش واستيقظ في نفس الوقت يومياً",
  },
  {
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    title: "بيئة مريحة",
    description: "اجعل غرفة النوم مظلمة وهادئة وباردة",
  },
  {
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    title: "الاسترخاء قبل النوم",
    description: "اقرأ كتاباً أو استمع لموسيقى هادئة",
  },
];

export default function SleepExercises() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="psychological-section" style={{ backgroundColor: "#f0f8ff", padding: "4rem 0" }}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">
          تمارين تحسين النوم
        </h2>
        <p className="section-subtitle" data-aos="fade-up">
          استراتيجيات لمساعدتك على النوم بعمق واستعادة طاقتك
        </p>

        <div className="sleep-content">
          <div className="sleep-text" data-aos="fade-right">
            <h3>روتين النوم الصحي</h3>
            <div className="sleep-points">
              {sleepPoints.map((point, index) => (
                <div className="point" key={index}>
                  <img src={point.img} alt={point.title} />
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sleep-video" data-aos="fade-left">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/aEqlQvczMJQ"
                title="تمارين الاسترخاء للنوم العميق"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
