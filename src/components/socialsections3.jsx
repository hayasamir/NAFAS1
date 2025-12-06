import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../social.css";
export default function SocialSectionsthree(){
  

       React.useEffect(() => {
                 AOS.init({ duration: 1200, once: true });
               }, []);
          const bookLinks = [
  { id: 1, title: "📚 كيف تكسب الأصدقاء", url: "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%83%D9%8A%D9%81-%D8%AA%D9%83%D8%B3%D8%A8-%D8%A7%D9%84%D8%A3%D8%B5%D8%AF%D9%82%D8%A7%D8%A1-%D9%88%D8%AA%D8%A4%D8%AB%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D9%86%D8%A7%D8%B3-pdf-1722938954" },
  { id: 2, title: "📚 فن التواصل", url: "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%81%D9%86-%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9-%D8%A7%D9%84%D8%A2%D8%AE%D8%B1%D9%8A%D9%86-pdf" },
  { id: 3, title: "📚 الحديث الهادئ", url: "#" },
    { id: 4, title: "📚 قوة الذكاء العاطفي", url: "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%82%D9%88%D9%87-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%B9%D8%A7%D8%B7%D9%81%D9%8A-pdf" },

];

const videoLinks = [
  { id: 1, title: "🎬 مهارات الاستماع الفعال", url: "https://youtu.be/Pl4VA9x29Yo?si=wCP0UWqHN4pw_GND" },
  { id: 2, title: "🎬 كيف تبني ثقتك الاجتماعية", url: "https://youtu.be/iLeZ3V8-Lb0?si=k-zWj5j2YEWkFFoG" },
  { id: 3, title: "🎬 التعامل مع القلق الاجتماعي", url: "https://youtu.be/YHyda3LpcGM?si=27uUA9j5rAHQOklN" },
  { id: 4, title: "🎬 فن إدارة الحوار", url: "https://youtu.be/tllHuR3A_DI?si=GHgNPtv_tVXphkvR" },
];

const supportList = [
  { id: 1, title: "👥 مجموعات الدعم الاجتماعي" },
  { id: 2, title: "👥 ورش العمل التفاعلية" },
  { id: 3, title: "👥 جلسات التدريب العملي" },
];


  return (
    <div
      className="resources-section"
      style={{ background: "linear-gradient(135deg, #63769b 0%, #ccfff6 100%)", padding: "4rem 0", color: "white" }}
    >
      <div className="container">
        <h2 className="section-title" data-aos="fade-down" style={{ color: "white" }}>
          موارد إضافية
        </h2>
        <p className="section-subtitle" data-aos="fade-up" style={{ color: "rgba(255,255,255,0.8)" }}>
          استكشف المزيد من المصادر لتطوير مهاراتك الاجتماعية
        </p>

        <div className="resources-grid">
          <div className="resource-card" data-aos="zoom-in">
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="كتب"
              className="resource-image"
            />
            <h3>كتب مقترحة</h3>
            <div className="video-links">
              {bookLinks.map((book) => (
                <a key={book.id} href={book.url} target="_blank">
                  {book.title}
                </a>
              ))}
            </div>
          </div>

          <div className="resource-card" data-aos="zoom-in" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="فيديوهات"
              className="resource-image"
            />
            <h3>فيديوهات تعليمية</h3>
            <div className="video-links">
              {videoLinks.map((video) => (
                <a key={video.id} href={video.url} target="_blank">
                  {video.title}
                </a>
              ))}
            </div>
          </div>

          <div className="resource-card" data-aos="zoom-in" data-aos-delay="400">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="مجموعات دعم"
              className="resource-image"
            />
            <h3>مجموعات الدعم</h3>
            <ul>
              {supportList.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
}