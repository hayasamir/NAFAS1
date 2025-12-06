import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

export default function WhoWeAre() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (

<section className="who_we_are" id="who_we_are">
        <div className="container">
            <h1 data-aos="fade-down">!أنت تستحق أن تعيش بسلام، وأن تعيد بناء نفسك خطوة بخطوة</h1>
 
            <div className="row align-items-center mb-5">
                <div className="col-12 col-lg-6 mb-3 mb-lg-0" data-aos="fade-left">
                    <img src="images/26ed14c7c55adbebc0fb437628896c21.jpg" alt="من نحن" className="content-img"/>
                </div>
                <div className="col-12 col-lg-6" data-aos="fade-right">
                    <h2>
                        <img src="images/logo.png" alt="شعار نفس"/>
                        من نحن
                    </h2>
                    <p>
                        <span>نَفَس&gt;&gt;</span>
                        مساحة آمنة وهادئة للشباب بين 17–25، هدفها مساعدتك تستعيد توازنك النفسي خطوة بخطوة.
                        نوفر لك تمارين بسيطة، موارد صوتية، ومساحات تفريغ مشاعر تساعدك تفهم نفسك أكتر
                        وتتعامل مع الضغط والقلق بصحة ووعي.
                    </p>
                </div>
            </div>

           
            <div className="row align-items-center mb-5 flex-lg-row-reverse">
                <div className="col-12 col-lg-6 mb-3 mb-lg-0" data-aos="fade-right">
                    <img src="images/8126ee314693ae6bb0d282190dcd9da5.jpg" alt="رؤيتنا" className="content-img"/>
                </div>
                <div className="col-12 col-lg-6" data-aos="fade-left">
                    <h2>رؤيتنا</h2>
                    <p>
                        <span>نطمح &gt;&gt;</span>
                        إلى أن نكون مساحةً رقميةً آمنة تُعين الشباب على فهم ذواتهم، واستعادة توازنهم النفسي،
                        والتعامل مع ضغوط الحياة بوعيٍ وهدوء.
                    </p>
                </div>
            </div>

             
            <div className="row align-items-center mb-4">
                <div className="col-12 col-lg-6 mb-3 mb-lg-0" data-aos="fade-left">
                    <img src="images/82ca8bae86246ba15e523358dfb1f3b4.jpg" alt="قيمنا الأساسية" className="content-img"/>
                </div>
                <div className="col-12 col-lg-6" data-aos="fade-right">
                    <h2>قيمنا الأساسية</h2>
                    <p>
                        <span>نستند &gt;&gt;</span>
                        في عملنا إلى مجموعة من المبادئ التي تشكّل جوهر هذا المشروع؛ فنحن نضع الإنسان أولًا،
                        ونؤمن بضرورة توفير مساحة آمنة تحترم خصوصيته ومشاعره.
                        نعتمد الصدق والوضوح في كل ما نقدّمه، ونسعى إلى دعم الزائر بلطف ورحمة، مع الالتزام
                        بتقديم محتوى موثوق يساعده على فهم ذاته، والتقدّم بخطوات ثابتة نحو توازنه النفسي
                        والاجتماعي والتعليمي.
                    </p>
                </div>
            </div>

        </div>
    </section>
  );
}
