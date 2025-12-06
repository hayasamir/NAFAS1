import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../social.css";
export default function SocialSections(){
       
       React.useEffect(() => {
                 AOS.init({ duration: 1200, once: true });
               }, []);
               const skillsData = [
  {
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "فن الإصغاء",
    text: "كيف تكون مستمعاً جيداً وتفهم الآخرين بشكل أعمق",
    points: [
      "👁️ حافظ على التواصل البصري",
      "👂 لا تقاطع المتحدث",
      "❓ اطرح أسئلة توضيحية",
      "💝 أعطِ تعليقات إيجابية",
    ],
    aos: "fade-right",
  },
  {
    img: "images/Body languge.jpg",
    title: "لغة الجسد",
    text: "استخدام لغة الجسد الإيجابية في التواصل",
    points: [
      "😊 ابتسم بلطف",
      "🧍 حافظ على وضعية منفتحة",
      "👐 استخدم إيماءات مناسبة",
      "📏 احترم المساحة الشخصية",
    ],
    aos: "fade-up",
  },
  {
    img: "images/emotional.jpg",
    title: "الذكاء العاطفي",
    text: "فهم مشاعرك ومشاعر الآخرين",
    points: [
      "🎭 تعرف على مشاعرك",
      "⚡ تحكم في ردود أفعالك",
      "🤝 تفهم مشاعر الآخرين",
      "🌱 ابنِ علاقات إيجابية",
    ],
    aos: "fade-left",
  },
];
const relationshipPoints = [
  {
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    title: "الصدق والصراحة",
    text: "كن صادقاً في تعاملاتك وتعبيراتك",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    title: "الاحترام المتبادل",
    text: "احترم اختلافات الآخرين وآرائهم",
  },
  {
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    title: "التوازن في العلاقة",
    text: "لا تكن متلقياً فقط ولا معطياً فقط",
  },
  {
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    title: "الصبر والتفهم",
    text: "أعطِ العلاقة الوقت الكافي للنمو",
  }
];

               return(
                <>
                <div className="social-section" style={{ backgroundColor: "#f8f9fa", padding: "4rem 0" }}>
  <div className="container">
    <h2 className="section-title" data-aos="fade-down">مهارات التواصل الفعال</h2>
    <p className="section-subtitle" data-aos="fade-up">
      تعلم كيفية التعبير عن نفسك بثقة ووضوح
    </p>

    <div className="skills-grid">
      {skillsData.map((skill, i) => (
        <div className="skill-card" data-aos={skill.aos} key={i}>
          <img src={skill.img} alt={skill.title} className="skill-image" />
          <h3>{skill.title}</h3>
          <p>{skill.text}</p>
          <ul>
            {skill.points.map((p, idx) => <li key={idx}>{p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>
<div className="social-section" style={{ backgroundColor: "white", padding: "4rem 0" }}>
  <div className="container">
    <h2 className="section-title" data-aos="fade-down">بناء العلاقات الصحية</h2>
    <p className="section-subtitle" data-aos="fade-up">
      كيف تنشئ وتحافظ على علاقات إيجابية
    </p>

    <div className="relationship-content">
      <div className="relationship-text" data-aos="fade-right">
        <h3>أسس العلاقات الناجحة</h3>

        <div className="relationship-points">
          {relationshipPoints.map((item, i) => (
            <div className="point" key={i}>
              <img src={item.img} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relationship-image" data-aos="fade-left">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="بناء العلاقات"
        />
      </div>
    </div>
  </div>
</div>

                </>
               )
}