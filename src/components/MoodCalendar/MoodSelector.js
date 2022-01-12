import React from "react";

function MoodSelector({ year, setCurrentMood, moodsList, selectedMood }) {
  const updateMood = (mood) => {
    // 1. set selected mood
    // 2. udpate mood
    console.log("selected mood", mood);
    setCurrentMood(mood);
  };
  return (
    <div>
      <section>
        <h2>{`${year} Mood Calendar`}</h2>
        <p>color each day depending on what your mood was / is</p>
        <p> select mood:</p>
        <div className="moods-container">
          {moodsList.map((mood) => {
            return (
              <div>
                <span
                  className={`mood-icon ${
                    selectedMood?.value === mood.value ? "mood-selected" : ""
                  }`}
                  key={mood.value}
                  onClick={() => updateMood(mood)}
                >
                  {String.fromCodePoint(mood.dec)}
                </span>
                <div className={`color-example ${mood.value}` }></div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default MoodSelector;
