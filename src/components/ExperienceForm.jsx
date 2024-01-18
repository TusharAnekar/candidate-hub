import { useState } from "react";
import { toast } from "react-toastify";

const ExperienceForm = ({ candidateDetails, setCandidateDetails, exp }) => {
  const [experienceDetails, setExperienceDetails] = useState({
    company: exp ? exp.company : "",
    duration_from: exp ? exp.duration_from : "",
    duration_to: exp ? exp.duration_to : "",
    project: exp ? exp.project : "",
    role: exp ? exp.role : "",
    team_size: exp ? exp.team_size : 0,
  });

  const handleInput = (e) => {
    setExperienceDetails({
      ...experienceDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (candidateDetails.experience.length >= 10) {
      toast.error("Maximum 10 education entries allowed.");
      setExperienceDetails({
        ...experienceDetails,
        company: "",
        duration_from: "",
        duration_to: "",
        project: "",
        role: "",
        team_size: 0,
      });
    } else if (
      experienceDetails.company === "" ||
      experienceDetails.duration_from === "" ||
      experienceDetails.duration_to === "" ||
      experienceDetails.project === "" ||
      experienceDetails.role === "" ||
      experienceDetails.team_size === 0
    ) {
      toast.error("Please enter all the fields in Step4: Experience Form");
    } else {
      setCandidateDetails({
        ...candidateDetails,
        experience: [...candidateDetails.experience, experienceDetails],
      });
      setExperienceDetails({
        ...experienceDetails,
        company: "",
        duration_from: "",
        duration_to: "",
        project: "",
        role: "",
        team_size: 0,
      });
    }
  };

  return (
    <section className="my-4">
      <h3 className="mb-2 text-lg font-semibold">Step 4: Experience</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="company" className="block">
          Company:{" "}
        </label>
        <input
          type="text"
          name="company"
          id="company"
          value={experienceDetails.company}
          className="mb-2 block w-full rounded-lg border p-1"
          required={candidateDetails.experience.length ? false : true}
          onChange={handleInput}
        />

        <label htmlFor="duration_from" className="block">
          Duration from:{" "}
        </label>
        <input
          type="text"
          name="duration_from"
          id="duration_from"
          placeholder="Jan-2024"
          value={experienceDetails.duration_from}
          className="mb-2 block w-full rounded-lg border p-1"
          required={candidateDetails.experience.length ? false : true}
          onChange={handleInput}
        />

        <label htmlFor="duration_to" className="block">
          Duration to:{" "}
        </label>
        <input
          type="text"
          name="duration_to"
          id="duration_to"
          placeholder="Feb-2024"
          value={experienceDetails.duration_to}
          className="mb-2 block w-full rounded-lg border p-1"
          required={candidateDetails.experience.length ? false : true}
          onChange={handleInput}
        />

        <label htmlFor="project" className="block">
          Project:{" "}
        </label>
        <input
          type="text"
          name="project"
          id="project"
          value={experienceDetails.project}
          className="mb-2 block w-full rounded-lg border p-1"
          required={candidateDetails.experience.length ? false : true}
          onChange={handleInput}
        />

        <label htmlFor="role" className="block">
          Role:{" "}
        </label>
        <input
          type="text"
          name="role"
          id="role"
          value={experienceDetails.role}
          className="mb-2 block w-full rounded-lg border p-1"
          required={candidateDetails.experience.length ? false : true}
          onChange={handleInput}
        />

        <label htmlFor="team_size" className="block">
          Team size:{" "}
        </label>
        <input
          type="number"
          name="team_size"
          id="team_size"
          value={experienceDetails.team_size}
          className="mb-2 block w-full rounded-lg border p-1"
          required={candidateDetails.experience.length ? false : true}
          onChange={handleInput}
        />

        <button type="submit" className="rounded-lg bg-blue-500 p-2 text-white">
          Save
        </button>
      </form>
    </section>
  );
};

export { ExperienceForm };
