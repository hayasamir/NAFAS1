import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../social.css";
export default function SocialSectionstwo(){
    
           React.useEffect(() => {
                     AOS.init({ duration: 1200, once: true });
                   }, []);
                   const situations = [
  {
    id: 1,
    title: "الاجتماعات والمقابلات",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "الاجتماعات",
    description: "نصائح للتعامل بثقة في المواقف الرسمية",
    tips: ["💼 استعد مسبقاً", "🎯 حدد أهدافك", "💬 تدرب على الحديث", "😊 حافظ على هدوئك"],
    aos: "flip-left"
  },
  {
    id: 2,
    title: "حل الخلافات",
    img: "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?w=1000&t=st=1700000000~exp=1700003600~hmac=1234567890",
    alt: "حل الخلافات",
    description: "طرق بناءة للتعامل مع النزاعات",
    tips: ["👂 استمع أولاً", "💭 تحدث عن مشاعرك", "🔄 ابحث عن حل وسط", "❤️ حافظ على الاحترام"],
    aos: "flip-up"
  },
  {
    id: 3,
    title: "التواصل في المجموعات",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "التواصل الجماعي",
    description: "كيف تشارك بشكل فعال في المناقشات الجماعية",
    tips: ["🗣️ شارك برأيك", "👁️ انتبه للجميع", "⏱️ احترم وقت الآخرين", "🤝 شجع المشاركة"],
    aos: "flip-right"
  }
];

const exercises = [
  {
    id: 1,
    title: "تمرين المرآة",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "تمرين المرآة",
    description: "قف أمام المرآة وتدرب على الحديث مع نفسك. لاحظ تعبيرات وجهك ولغة جسدك.",
    steps: ["1. ابدأ بمقدمة بسيطة", "2. لاحظ تواصلك البصري", "3. حَسّن نبرة صوتك", "4. كرر التمرين بانتظام"],
    aos: "fade-right"
  },
  {
    id: 2,
    title: "محادثة مع صديق",
    img: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "محادثة مع صديق",
    description: "اختر صديقاً مقرباً واطلب منه مساعدتك في التدرب على مهارات التواصل.",
    steps: ["1. اختر موضوعاً محايداً", "2. ركز على الاستماع الفعال", "3. اطلب تعليقات بناءة", "4. طبق النصائح مباشرة"],
    aos: "fade-up"
  },
  {
    id: 3,
    title: "مجموعة دعم",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "مجموعة دعم",
    description: "انضم لمجموعة دعم أو نادي اجتماعي لممارسة المهارات في بيئة آمنة.",
    steps: ["1. ابحث عن مجموعة مناسبة", "2. ابدأ كمراقب أولاً", "3. شارك تدريجياً", "4. احتفل بتقدمك"],
    aos: "fade-left"
  }
];
 return (
    <>
      {/* قسم المواقف الاجتماعية */}
      <div className="social-section" style={{ backgroundColor: "#f0f8ff", padding: "4rem 0" }}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">
            التعامل مع المواقف الاجتماعية الصعبة
          </h2>
          <p className="section-subtitle" data-aos="fade-up">
            استراتيجيات عملية لمواجهة التحديات الاجتماعية
          </p>

          <div className="situations-grid">
            {situations.map((situation) => (
              <div key={situation.id} className="situation-card" data-aos={situation.aos}>
                <img src={situation.img} alt={situation.alt} className="situation-image" />
                <h3>{situation.title}</h3>
                <p>{situation.description}</p>
                <div className="situation-tips">
                  {situation.tips.map((tip, index) => (
                    <span key={index}>{tip}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* قسم التمارين العملية */}
      <div className="social-section" style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">
            تمارين عملية للتطوير
          </h2>
          <p className="section-subtitle" data-aos="fade-up">
            مارس هذه التمارين لتحسين مهاراتك الاجتماعية
          </p>

          <div className="exercises">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="exercise" data-aos={exercise.aos}>
                <img src={exercise.img} alt={exercise.alt} className="exercise-image" />
                <div className="exercise-content">
                  <h3>{exercise.title}</h3>
                  <p>{exercise.description}</p>
                  <div className="exercise-steps">
                    {exercise.steps.map((step, index) => (
                      <span key={index}>{step}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}