import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

export default function HomeSection() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="homebage">
      <div className="home">
        <div className="container text-center">
          <h1>نفس</h1>
          <h1 data-aos="fade-down">مرحباً! نحن هنا لندعمك خطوة بخطوة</h1>

          <p data-aos="fade-up">
            في هذا المكان نمنحك مساحة آمنة لاستعادة توازنك النفسي، الاجتماعي، والتعليمي
            <br />
            مساحة تساعدك تتنفس، تفهم حالك، وتبدأ رحلة جديدة بوعي وقوة
          </p>
        </div>
      </div>
    </section>
  );
}
