import React, { useState } from "react";

export default function ABCModel() {
  // state لكل خطوة
  const [steps, setSteps] = useState({
    A: { expanded: false, value: "" },
    B: { expanded: false, value: "" },
    C: { expanded: false, value: "" },
  });

  // toggle لفتح خطوة واحدة وإغلاق الباقي
  const toggleStep = (step) => {
    setSteps((prev) => ({
      A: { ...prev.A, expanded: step === "A" ? !prev.A.expanded : false },
      B: { ...prev.B, expanded: step === "B" ? !prev.B.expanded : false },
      C: { ...prev.C, expanded: step === "C" ? !prev.C.expanded : false },
    }));
  };

  // handle تغيير النص في كل textarea
  const handleChange = (step, e) => {
    const value = e.target.value;
    setSteps((prev) => ({
      ...prev,
      [step]: { ...prev[step], value },
    }));
  };

  return (
    <section className="abc-model">
      <h2>مواجهة الأفكار السلبية – ABC Model</h2>

      {/* خطوة A */}
      <div className="abc-item">
        <input type="checkbox" id="stepA" checked={steps.A.expanded} readOnly />
        <label htmlFor="stepA" onClick={() => toggleStep("A")}>
          <span className="icon">📌</span> A: الحدث
        </label>
        {steps.A.expanded && (
          <div className="abc-content">
            <p>
              <strong>الحدث:</strong> ما الذي حصل لك؟ مثال: "صديقي لم يرد على رسالتي".
            </p>
            <textarea
              placeholder="اكتب الحدث هنا..."
              value={steps.A.value}
              onChange={(e) => handleChange("A", e)}
            />
            <p className="tip">
              💡 نصيحة: ركزي على الحدث نفسه بدون حكم أو افتراضات.
            </p>
          </div>
        )}
      </div>

      {/* خطوة B */}
      <div className="abc-item">
        <input type="checkbox" id="stepB" checked={steps.B.expanded} readOnly />
        <label htmlFor="stepB" onClick={() => toggleStep("B")}>
          <span className="icon">💭</span> B: الفكرة
        </label>
        {steps.B.expanded && (
          <div className="abc-content">
            <p>
              <strong>الفكرة:</strong> ما هي الأفكار أو المعتقدات التي ظهرت عند الحدث؟ مثال: "أكيد هو زعلان مني".
            </p>
            <textarea
              placeholder="اكتب الفكرة هنا..."
              value={steps.B.value}
              onChange={(e) => handleChange("B", e)}
            />
            <p className="tip">
              💡 نصيحة: حاولي ملاحظة أي أفكار سلبية أو غير منطقية.
            </p>
          </div>
        )}
      </div>

      {/* خطوة C */}
      <div className="abc-item">
        <input type="checkbox" id="stepC" checked={steps.C.expanded} readOnly />
        <label htmlFor="stepC" onClick={() => toggleStep("C")}>
          <span className="icon">⚡</span> C: النتيجة
        </label>
        {steps.C.expanded && (
          <div className="abc-content">
            <p>
              <strong>النتيجة:</strong> ما هو شعورك أو تصرفك الناتج عن الفكرة؟ مثال: "حزن أو قلق".
            </p>
            <textarea
              placeholder="اكتب النتيجة هنا..."
              value={steps.C.value}
              onChange={(e) => handleChange("C", e)}
            />
            <p className="tip">
              💡 نصيحة: فكري كيف يمكن إعادة صياغة الفكرة لتغيير النتيجة إلى أفضل.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
