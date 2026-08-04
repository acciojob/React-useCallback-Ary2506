import React, { useState, useCallback } from "react";
import SkillList from "./SkillList";

const UseCallbackComp = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [input, setInput] = useState("");

  const addSkill = useCallback(() => {
    const trimmed = input.trim();
    if (trimmed === "") return;

    setSkills((prevSkills) => {
      if (prevSkills.includes(trimmed)) {
        return prevSkills;
      }
      return [...prevSkills, trimmed];
    });
    setInput("");
  }, [input]);

  const deleteSkill = useCallback((skillToDelete) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToDelete)
    );
  }, []);

  return (
    <div>
      <h1 id="heading">use Callback Hook</h1>
      <input
        id="skill-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} onDelete={deleteSkill} />
    </div>
  );
};

export default UseCallbackComp;
