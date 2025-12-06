import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    title: "التنفس العميق",
    description: "تقنية بسيطة وفعالة لتخفيف التوتر والقلق",
    video: "https://www.youtube.com/embed/XDVLRtqa6h0",
    points: ["🌬️ استنشق ببطء من الأنف", "⏱️ احبس النفس لثوانٍ قليلة", "👄 ازفر ببطء من الفم", "🔄 كرر 5-10 مرات"],
    aos: "fade-right",
  },
  {
    title: "استرخاء العضلات التدريجي",
    description: "تقنية لتحرير التوتر الجسدي والعقلي",
    video: "https://www.youtube.com/embed/6vO1wPAmiMQ",
    points: ["🦶 ابدأ بشد عضلات قدميك", "🦵 انتقل إلى عضلات الساقين", "💪 استمر في الصعود تدريجياً", "😌 أطلق التوتر مع الزفير"],
    aos: "fade-up",
  },
  {
    title: "التأمل الموجه",
    description: "ممارسة يومية لتهدئة العقل وتقوية التركيز",
    video: "https://www.youtube.com/embed/2_Ot9-n0Yi4?si=GL1gzumrzntnYKWh",
    points: ["🧘 اجلس في مكان هادئ", "🌬️ ركز على أنفاسك", "💭 لاحظ الأفكار دون حكم", "🕒 ابدأ بـ 5 دقائق يومياً"],
    aos: "fade-left",
  },
];

const panicPoints = [
  {
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    title: "التركيز على التنفس",
    description: "استنشق ببطء من الأنف وازفر ببطء من الفم",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    title: "تشتيت الانتباه",
    description: "انظر إلى شيء معين وركز على تفاصيله",
  },
  {
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    title: "الاتصال بالآخرين",
    description: "تحدث مع شخص مقرب لتشتيت الانتباه",
  },
];

export default function PsychologicalSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* تمارين التنفس والاسترخاء */}
      <section className="psychological-section" style={{ backgroundColor: "#f8f9fa", padding: "4rem 0" }}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">
            تمارين التنفس والاسترخاء
          </h2>
          <p className="section-subtitle" data-aos="fade-up">
            تعلم كيفية التحكم في تنفسك لتهدئة جسمك وعقلك
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" data-aos={skill.aos} key={index}>
                <iframe src={skill.video} title={skill.title} frameBorder="0" allowFullScreen></iframe>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <ul>
                  {skill.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* التعامل مع نوبات الهلع */}
      <section className="psychological-section" style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">
            التعامل مع نوبات الهلع
          </h2>
          <p className="section-subtitle" data-aos="fade-up">
            استراتيجيات عملية لمواجهة نوبات القلق والهلع
          </p>

          <div className="panic-content">
            <div className="panic-text" data-aos="fade-right">
              <h3>استراتيجيات فورية أثناء النوبة</h3>
              <div className="panic-points">
                {panicPoints.map((point, index) => (
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

            <div className="panic-video" data-aos="fade-left">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/lFxI0O2JmNE"
                  title="تمرين التعامل مع نوبات الهلع"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
