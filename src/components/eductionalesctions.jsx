import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../eductional.css";
export default function EdectionalSections({children}) {
    const listone =[
        {id:1, title:"ابدا بـ 15 دقيقة يوميًا فقط"},
        {id:2, title: "اختر مواد تحبها في البداية"},
        {id:3, title:"استخدم تقنية بومودورو"},
        {id:4, title:"احتفل بالإنجازات الصغيرة"},
    ];
    const myListone = listone.map((one) =>{
        return (<li key={one.id}>{one.title}</li>)
    });

  const listtwo =[
        {id:1, title:"تقنية بومودورو (25/5)"  },
        {id:2, title: "تقسيم المهام الكبيرة"},
        {id:3, title:"إغلاق مصادر التشتيت"},
        {id:4, title:"تحديد أوقات الذروة"},
    ];
    const myListtwo= listtwo.map((two) =>{
        return (<li key={two.id}>{two.title}</li>)
    });

     const listthree=[
        {id:1, title:"التصميم الواضح والمنظم"  },
        {id:2, title: "إبراز المهارات الرئيسية"},
        {id:3, title:"استخدام أفعال الحركة"},
        {id:4, title:"التخصيص حسب الوظيفة"},
    ];
    const myListthree= listthree.map((three) =>{
        return (<li key={three.id}>{three.title}</li>)
    });
    
    
   React.useEffect(() => {
             AOS.init({ duration: 1200, once: true });
           }, []);

  return (
    <>
          {/* القسم الأول */}
      <section className="psychological-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">
            أساسيات التعلم الفعال
          </h2>
          <p className="section-subtitle" data-aos="fade-up">
            تعلم كيفية الدراسة بذكاء وليس بجهد أكبر
          </p>

          <div className="education-grid">
            {/* card 1 */}
            <div className="education-card" data-aos="fade-right">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/h3degi1y3Ow"
                  title="استعادة الشغف التعليمي"
                  allowFullScreen
                ></iframe>
              </div>

              <h3>استعادة شغفك التعليمي</h3>
              <p>
                العودة إلى الدراسة بعد فترة انقطاع قد تبدو صعبة، لكن خطوة بخطوة تستطيع
                استعادة تركيزك وشغفك.
              </p>

              <div className="education-tips">
                <h4>نصائح سريعة:</h4>
                <ul>
                {myListone}
                </ul>
              </div>
            </div>

            {/* card 2 */}
            <div className="education-card" data-aos="fade-up">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/cAMGgr4w_Vk"
                  title="تنظيم الوقت"
                  allowFullScreen
                ></iframe>
              </div>

              <h3>تنظيم وقتك والدراسة بذكاء</h3>
              <p>لتجعل الدراسة أكثر فعالية، ضع جدول يومي واضح واستخدم تقنيات إدارة الوقت.</p>

              <div className="education-tips">
                <h4>استراتيجيات التنظيم:</h4>
                <ul>
                  {myListtwo}
                </ul>
              </div>
            </div>

            {/* card 3 */}
            <div className="education-card" data-aos="fade-left">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/-PL97NjEW_k"
                  title="صنع CV قوي"
                  allowFullScreen
                ></iframe>
              </div>

              <h3>كيف تصنع CV قوي</h3>
              <p>كتابة سيرة ذاتية قوية هي أول خطوة لتترك انطباعًا مميزًا لدى أصحاب العمل.</p>

              <div className="education-tips">
                <h4>نقاط القوة في السيرة الذاتية:</h4>
                <ul>
                 {myListthree}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* القسم الثاني */}
      <section className="study-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">
            مهارات الدراسة المتقدمة
          </h2>
          <p className="section-subtitle" data-aos="fade-up">
            طور أساليبك الدراسية لتحقيق نتائج أفضل
          </p>

          <div className="education-grid">
            {/* card 1 */}
            <div className="education-card" data-aos="flip-left">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/IlU-zDU6aQ0"
                  title="تقنيات الحفظ"
                  allowFullScreen
                ></iframe>
              </div>

              <h3>تقنيات الحفظ والتذكر</h3>
              <p>
                تعلم تقنيات فعالة لتحسين قدرتك على الحفظ والتذكر واسترجاع المعلومات.
              </p>

              <div className="education-tips">
                <h4>تقنيات فعالة:</h4>
                <ul>
                {children} 
                </ul>
              </div>
            </div>

            {/* card 2 */}
            <div className="education-card" data-aos="flip-up">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/WSjjnYJX180?si=kPcyJxlzqW-TISmL"
                  title="القراءة السريعة"
                  allowFullScreen
                ></iframe>
              </div>

              <h3>القراءة السريعة والفعالة</h3>
              <p>طور مهاراتك في القراءة لتستوعب المعلومات بشكل أسرع وأفضل.</p>

              <div className="education-tips">
                <h4>تحسين القراءة:</h4>
                <ul>
                  <li>التتبع البصري</li>
                  <li>التدرب على القراءة الصامتة</li>
                  <li>أخذ الملاحظات</li>
                  <li>تحديد النقاط الرئيسية</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* القسم الثالث */}
      <section className="resources-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">
            تطوير المهارات الشخصية
          </h2>
          <p className="section-subtitle" data-aos="fade-up">
            مهارات تكميلية للنجاح الأكاديمي والمهني
          </p>

          <div className="education-grid">
            {/* card 1 */}
            <div className="education-card" data-aos="zoom-in">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/Kr1O_bWjnzA?si=xExUJJwr-bVW5Re5"
                  title="مهارات العرض"
                  allowFullScreen
                ></iframe>
              </div>

              <h3>مهارات العرض والتقديم</h3>
              <p>اكتسب الثقة في تقديم العروض والتحدث أمام الجمهور بشكل احترافي.</p>

              <div className="education-tips">
                <h4>نصائح للتقديم:</h4>
                <ul>
                  <li>تنظيم المحتوى بشكل منطقي</li>
                  <li>استخدام لغة الجسد</li>
                  <li>التنويع في نبرات الصوت</li>
                  <li>التدرب المسبق</li>
                </ul>
              </div>
            </div>

            {/* card 2 */}
            <div className="education-card" data-aos="zoom-in">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/H14bBuluwB8"
                  title="إدارة المشاريع"
                  allowFullScreen
                ></iframe>
              </div>

              <h3>إدارة المشاريع الدراسية</h3>
              <p>تعلم كيفية التخطيط والإدارة الفعالة للمشاريع والبحوث الدراسية.</p>

              <div className="education-tips">
                <h4>مفاتيح الإدارة:</h4>
                <ul>
                  <li>تقسيم الأهداف إلى مهام</li>
                  <li>استخدام الجداول الزمنية</li>
                  <li>إدارة الموارد</li>
                  <li>مهارات العمل الجماعي</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}