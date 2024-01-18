import { useState } from "react";
import { toast } from "react-toastify";

const SkillForm = ({ candidateDetails, setCandidateDetails, skill }) => {
  const [skillDetails, setSkillDetails] = useState({
    name: skill ? skill.name : "",
    experience: skill ? skill.experience : 0,
  });

  const handleInput = (e) => {
    setSkillDetails({
      ...skillDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (candidateDetails.skills.length >= 10) {
      toast.error("Maximum 10 education entries allowed.");
      setSkillDetails({ ...skillDetails, name: "", experience: 0 });
    } else if (skillDetails.name === "" || skillDetails.experience <= 0) {
      toast.error("Please enter all the fields in Step2: Education Form");
    } else {
      setCandidateDetails({
        ...candidateDetails,
        skills: [...candidateDetails.skills, skillDetails],
      });
      setSkillDetails({ ...skillDetails, name: "", experience: 0 });
    }
  };

  return (
    <section className="my-4">
      <h3 className="mb-2 text-lg font-semibold">Step 3: Skills</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block">
          Name:{" "}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={skillDetails.name}
          className="mb-2 block w-full rounded-lg border p-1"
          required={candidateDetails.education.length ? false : true}
          onChange={handleInput}
        />

        <label htmlFor="experience" className="block">
          Experience:{" "}
        </label>
        <input
          type="number"
          name="experience"
          id="experience"
          value={skillDetails.experience}
          className="mb-2 block w-full rounded-lg border p-1"
          required={candidateDetails.education.length ? false : true}
          onChange={handleInput}
        />

        <button type="submit" className="rounded-lg bg-blue-500 p-2 text-white">
          Save
        </button>
      </form>
    </section>
  );
};

export { SkillForm };
