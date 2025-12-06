import React, { useState } from "react";

export default function MoodSection() {
  const [selectedMood, setSelectedMood] = useState("");
  const [tip, setTip] = useState("💛 يوم لطيف إلك إن شاء الله 🌿");

  const moods = [
    { emoji: "😊", label: "هادئ", tip: "🌿 حافظي على هدوءك واستمتعي بالسلام الداخلي." },
    { emoji: "😴", label: "مرهق", tip: "✨ جربي تشربي مي وتاخدي استراحة قصيرة." },
    { emoji: "😔", label: "حزين", tip: "💛 تذكري: المشاعر بتروح وبتيجي… خذي وقتك وكوني لطيفة مع نفسك." },
    { emoji: "😤", label: "قلق", tip: "💛 نصيحة: جربي تمرين التنفّس لمدة دقيقة." },
    { emoji: "🤍", label: "بحاجة لراحة", tip: "🤍 خذي بريك قصير… جسمك بحاجة يسترخي." },
  ];

  const handleMoodChange = (mood) => {
    setSelectedMood(mood.label);
    setTip(mood.tip);
  };

  return (
    <section className="mood-section">
      <h2>💛 كيف شعورك اليوم؟</h2>
      <p>اختار الشعور الأقرب إلك…</p>

      <div className="mood-options">
        {moods.map((mood, index) => (
          <label className="mood-card" key={index}>
            <input
              type="radio"
              name="mood"
              checked={selectedMood === mood.label}
              onChange={() => handleMoodChange(mood)}
            />
            {mood.emoji} <span>{mood.label}</span>
          </label>
        ))}
      </div>

      <p className="mood-tip">{tip}</p>
    </section>
  );
}
