
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../audio.css"
export default function AudioResources() {
     React.useEffect(() => {
               AOS.init({ duration: 1200, once: true });
             }, []);
   return (
    <>
      {/* مجموعة 1 */}
      <div className="audio-section" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <div className="audio-card">
          <img src="images/headphones.png" alt="icon" />
          <h3>هدوء الأعصاب</h3>
          <p>جلسة قصيرة تساعدك على تهدئة التوتر والرجوع للراحة النفسية.</p>
          <audio controls>
            <source src="audio/ngmPWmJ6kqE.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-card">
          <img src="images/star.png" alt="icon" />
          <h3>تراكمات</h3>
          <p>حلقة خفيفة لتنظيم أفكارك وتخفيف ضغط اليوم.</p>
          <audio controls>
            <source src="audio/-ChDKQtkAEE.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-card">
          <img src="images/stress.png" alt="icon" />
          <h3>القلق المفرط</h3>
          <p>جلسة تساعدك على تهدئة القلق وإعادة التركيز الذهني.</p>
          <audio controls>
            <source src="audio/bEZl-RQUQ1o.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-card">
          <img src="images/new-year-day.png" alt="icon" />
          <h3>البدايات الجديدة</h3>
          <p>
            لقة خفيفة بتحكي عن معنى البدء من جديد، وتهدّي القلق اللي جوّاك، وترجّعلك شعور الأمل خطوة
            خطوة.
          </p>
          <audio controls>
            <source src="audio/A7yjHs7zwI8.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>

      {/* مجموعة 2 */}
      <div className="audio-section" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <div className="audio-card">
          <img src="images/relax.png" alt="icon" />
          <h3>كيف تحقق الهدوء النفسي والسلام الداخلي؟</h3>
          <p>
            حلقة ناعمة بتعلّمك خطوات بسيطة لتهدئة القلق، تهوية بالك، واسترجاع إحساس السلام الداخلي بطريقة
            هادئة ومطمئنة.
          </p>
          <audio controls>
            <source src="audio/ngmPWmJ6kqE.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-card">
          <img src="images/brain.png" alt="icon" />
          <h3>كيف تتخلص من التفكير الزائد والقلق؟</h3>
          <p>
            حلقة قصيرة تساعدك توقف دوامة التفكير، تهدّي قلقك، وترجع تسيطري على بالك بخطوات بسيطة ومريحة.
          </p>
          <audio controls>
            <source src="audio/YoZ2s8jMeYA.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-card">
          <img src="images/hour-glass.png" alt="icon" />
          <h3>ما فاتك شي</h3>
          <p>
            حلقة هادئة تطمّنك إنك ما تأخرت على شيء، وإن كل إشي إله وقته المناسب… كلام بسيط يخفّف عليك ويهدي
            بالك.
          </p>
          <audio controls>
            <source src="audio/dBqO46XXbjI.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-card">
          <img src="images/flowers.png" alt="icon" />
          <h3>التشافي الذاتي</h3>
          <p>
            حلقة تساعدك تفهمي خطوات التشافي بهدوء، وكيف تبدأي ترميم نفسك من جوّا بطريقة لطيفة وواقعية
          </p>
          <audio controls>
            <source src="audio/nj87GiThgHI.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>

      {/* مجموعة 3 */}
      <div className="audio-section" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <div className="audio-card">
          <img src="images/street-view.png" alt="icon" />
          <h3>هل هذه النهاية؟</h3>
          <p>
            حلقة هادئة تطمّنك إن النهاية أحيانًا تكون بداية جديدة، وتهدي بالك بكلام بسيط ويدفي القلب
          </p>
          <audio controls>
            <source src="audio/-rmv0VUJg8g.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-card">
          <img src="images/self-esteem.png" alt="icon" />
          <h3>أنا أشعر</h3>
          <p>
            حلقة خفيفة بتساعدك تفهمي مشاعرك وتسمّيها، وتهدّي داخلك بكلام بسيط ويريّح القلب
          </p>
          <audio controls>
            <source src="audio/w-med4nbCfQ.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-card">
          <img src="images/ocean.png" alt="icon" />
          <h3>كيف نقاوم الانجراف؟</h3>
          <p>
            حلقة قصيرة بتساعدك ترجعي تَركّزي على ذاتك، وتقاومي الانسياق وراء الضغط والفوضى بخطوات هادئة
            وواضحة
          </p>
          <audio controls>
            <source src="audio/so6hMA4j5vs.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-card">
          <img src="public/images/self-awareness.png" alt="icon" />
          <h3>مُحترف الخسارة</h3>
          <p>
            حلقة رايقة بتحكي عن التعايش مع الخسائر، وكيف نتعامل معها بدون جلد، وبهدوء يساعدنا نكمّل الطريق
          </p>
          <audio controls>
            <source src="audio/tLlybpymato.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </>
  );
}