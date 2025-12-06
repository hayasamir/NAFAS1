import React, { useState, useEffect } from "react";

export default function EmotionsBox() {
  const [emotions, setEmotions] = useState(""); // حالة textarea
  const [savedEmotions, setSavedEmotions] = useState([]); // كل المشاعر المحفوظة
  const [showEmotions, setShowEmotions] = useState(false); // عرض/إخفاء المشاعر

  // تحميل المشاعر من localStorage عند أول تحميل للكمبوننت
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("emotionsList")) || [];
    setSavedEmotions(stored);
    if (stored.length > 0) setShowEmotions(true);
  }, []);

  // حفظ شعور جديد
  const handleSave = () => {
    if (!emotions.trim()) {
      alert("يرجى كتابة مشاعرك أولاً");
      return;
    }

    const newEmotion = {
      text: emotions,
      date: new Date().toLocaleString(),
    };

    const updatedEmotions = [...savedEmotions, newEmotion];
    localStorage.setItem("emotionsList", JSON.stringify(updatedEmotions));
    setSavedEmotions(updatedEmotions);
    setEmotions("");
    setShowEmotions(true);

    alert("💛 تم حفظ مشاعرك بأمان. مساحتك محفوظة على جهازك فقط.");
  };

  // مسح محتوى textarea فقط
  const handleClear = () => {
    setEmotions("");
    alert("تم مسح المشاعر بنجاح");
  };

  // تبديل عرض المشاعر
  const handleShow = () => {
    setShowEmotions(!showEmotions);
  };

  // مسح كل المشاعر من localStorage والـ state
  const handleDeleteAll = () => {
    const confirmDelete = window.confirm("هل أنتِ متأكدة إنك تريد حذف كل مشاعرك؟ 😢");
    if (confirmDelete) {
      localStorage.removeItem("emotionsList");
      setSavedEmotions([]);
      setShowEmotions(false);
      alert("تم حذف جميع مشاعرك بنجاح");
    }
  };

  return (
    <div
      className="space py-5"
      style={{ backgroundImage: "linear-gradient(180deg, rgba(204, 255, 246, 0.6) 0%, #63769b 80%)" }}
    >
      <div className="container">
        <div className="title mb-3 text-center">
          <h1 className="mb-2">مساحة تفريغ المشاعر</h1>
          <i className="fa-solid fa-feather"></i>
        </div>

        <p className="text-center mb-4">احكي لنفسك… شو بتحس الآن؟</p>

        <div className="text-center">
          <textarea
            className="form-control emotions-textarea mx-auto"
            placeholder={`مساحتك الآمنة للتعبير
اكتب مشاعرك، مش مطلوب منك صياغة كاملة… بس عبّر`}
            value={emotions}
            onChange={(e) => setEmotions(e.target.value)}
          />

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <button className="btn btn-success px-4" onClick={handleSave}>
              حفظ مشاعري
            </button>
            <button className="btn btn-danger px-4" onClick={handleClear}>
              مسح
            </button>
          </div>

          {savedEmotions.length > 0 && (
            <>
              <button className="btn btn-primary mt-3 px-4" onClick={handleShow}>
                {showEmotions ? "إخفاء مشاعري السابقة" : "عرض مشاعري السابقة"}
              </button>

              {showEmotions && (
                <div className="emotions-container mt-4">
                  {[...savedEmotions].reverse().map((item, index) => (
                    <div className="emotion-card" key={index}>
                      <span className="date">{item.date}</span>
                      <div className="text">💬 {item.text}</div>
                    </div>
                  ))}
                </div>
              )}

              {showEmotions && (
                <button className="btn btn-warning mt-3 px-4" onClick={handleDeleteAll}>
                  مسح كل مشاعري
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
