import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const exercises = [
  {
    title: "سجل الامتنان اليومي",
    description: "تدرب على ملاحظة الجوانب الإيجابية في حياتك",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tips: [
      "📝 اكتب 3 أشياء تشعر بالامتنان لها",
      "💭 ركز على التفاصيل الصغيرة",
      "🔄 كرر لمدة 21 يوماً",
      "✨ لاحظ التغير في نظرتك",
    ],
    aos: "flip-left",
  },
  {
    title: "إعادة صياغة الأفكار",
    description: "غير طريقة تفكيرك تجاه المواقف الصعبة",
    image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tips: [
      "🔍 تعرف على الأفكار السلبية",
      "🔄 حول 'لا أستطيع' إلى 'سأحاول'",
      "💪 ركز على ما يمكنك التحكم فيه",
      "🌱 احتفل بالنجاحات الصغيرة",
    ],
    aos: "flip-up",
  },
  {
    title: "التأكيدات الإيجابية",
    description: "استخدم كلمات إيجابية لتعزيز ثقتك بنفسك",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    tips: [
      "🗣️ اكتب عبارات إيجابية عن نفسك",
      "🔄 كررها يومياً بصوت عالٍ",
      "💖 آمن بما تقوله",
      "🌞 ابدأ يومك بهذه التأكيدات",
    ],
    aos: "flip-right",
  },
];

export default function ThinkingExercises() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="psychological-section" style={{ backgroundColor: "#fff5f5", padding: "4rem 0" }}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">
          تمارين التفكير الإيجابي
        </h2>
        <p className="section-subtitle" data-aos="fade-up">
          تعلم كيفية تحويل أفكارك السلبية إلى إيجابية
        </p>

        <div className="thinking-grid">
          {exercises.map((ex, index) => (
            <div className="thinking-card" key={index} data-aos={ex.aos}>
              <img src={ex.image} alt={ex.title} className="thinking-image" />
              <h3>{ex.title}</h3>
              <p>{ex.description}</p>
              <div className="thinking-tips">
                {ex.tips.map((tip, idx) => (
                  <span key={idx}>{tip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
