import { useState } from "react";
import { useCandidateContext } from "../contexts/candidate-context";
import { EducationForm } from "./EducationForm";
import { SkillForm } from "./SkillForm";
import { ExperienceForm } from "./ExperienceForm";
import { toast } from "react-toastify";

const EditCandidateForm = () => {
  const {
    candidates: { candidateToEdit, isCandidateEdit },
    setCandidates,
    editCandidate,
  } = useCandidateContext();

  const [candidateDetails, setCandidateDetails] = useState({
    id: candidateToEdit.id,
    profile_picture: candidateToEdit.profile_picture,
    name: candidateToEdit.name,
    address: candidateToEdit.address,
    phone: candidateToEdit.phone,
    email: candidateToEdit.email,
    gender: candidateToEdit.gender,
    hobbies: candidateToEdit.hobbies,
    education: candidateToEdit.education,
    skills: candidateToEdit.skills,
    experience: candidateToEdit.experience,
  });

  const handleInput = (e) => {
    setCandidateDetails({
      ...candidateDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleTextarea = (e) => {
    setCandidateDetails({
      ...candidateDetails,
      [e.target.name]: e.target.value.split("\n"),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEditDetails = () => {
    if (
      candidateDetails.id === "" ||
      candidateDetails.profile_picture === "" ||
      candidateDetails.name === "" ||
      candidateDetails.address === "" ||
      candidateDetails.phone === "" ||
      candidateDetails.email === "" ||
      candidateDetails.gender === "" ||
      candidateDetails.hobbies.length === 0 ||
      candidateDetails.education.length === 0 ||
      candidateDetails.skills.length === 0 ||
      candidateDetails.experience.length === 0
    ) {
      toast.error("Please enter all details in the form");
    } else {
      editCandidate(candidateDetails);
      setCandidateDetails({
        ...candidateDetails,
        profile_picture: "",
        name: "",
        address: "",
        phone: "",
        email: "",
        gender: "",
        hobbies: [],
        education: [],
        skills: [],
        experience: [],
      });
      setCandidates({ type: "TOGGLE_IS_CANDIDATE_EDIT" });
    }
  };

  const handleCancel = () => {
    setCandidates({ type: "TOGGLE_IS_CANDIDATE_EDIT" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <h3 className="text-lg font-semibold">Part 1</h3>

          <label htmlFor="profile_picture" className="block">
            Profile Picture:{" "}
          </label>
          <input
            type="url"
            name="profile_picture"
            id="profile_picture"
            defaultValue={candidateDetails.profile_picture}
            className="mb-2 block w-full rounded-lg border p-1"
            required
            onChange={handleInput}
          />

          <label htmlFor="name" className="block">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={candidateDetails.name}
            className="mb-2 block w-full rounded-lg border p-1"
            required
            onChange={handleInput}
          />

          <label htmlFor="address" className="block">
            Address:{" "}
          </label>
          <input
            type="text"
            name="address"
            id="address"
            defaultValue={candidateDetails.address}
            className="mb-2 block w-full rounded-lg border p-1"
            required
            onChange={handleInput}
          />

          <label htmlFor="phone" className="block">
            Phone:{" "}
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            defaultValue={candidateDetails.phone}
            className="mb-2 block w-full rounded-lg border p-1"
            required
            onChange={handleInput}
          />

          <label htmlFor="email" className="block">
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={candidateDetails.email}
            className="mb-2 block w-full rounded-lg border p-1"
            required
            onChange={handleInput}
          />

          <label htmlFor="gender" className="block">
            Gender:
          </label>
          <select
            name="gender"
            id="gender"
            defaultValue={candidateDetails.gender}
            className="mb-2 block w-full rounded-lg border p-1"
            required
            onChange={handleInput}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="hobbies" className="block">
            Hobbies:{" "}
          </label>
          <textarea
            name="hobbies"
            id="hobbies"
            defaultValue={candidateDetails.hobbies}
            className="mb-2 block w-full rounded-lg border p-1"
            required
            onChange={handleTextarea}
          ></textarea>
        </section>

        <button type="submit" className="rounded-lg bg-blue-500 p-2 text-white">
          Save
        </button>
      </form>

      <section>
        {candidateDetails.education.map((education, index) => (
          <EducationForm
            candidateDetails={candidateDetails}
            setCandidateDetails={setCandidateDetails}
            education={education}
            key={index}
          />
        ))}
      </section>

      <>
        {candidateDetails.skills.map((skill, index) => (
          <SkillForm
            candidateDetails={candidateDetails}
            setCandidateDetails={setCandidateDetails}
            skill={skill}
            key={index}
          />
        ))}
      </>

      <>
        {candidateDetails.experience.map((exp, index) => (
          <ExperienceForm
            candidateDetails={candidateDetails}
            setCandidateDetails={setCandidateDetails}
            exp={exp}
            key={index}
          />
        ))}
      </>

      <div className="flex justify-between gap-4">
        <button
          className="w-full rounded-lg bg-orange-600 p-2 text-white"
          onClick={handleEditDetails}
        >
          Edit Details
        </button>
        <button
          className="w-full rounded-lg bg-red-600 p-2 text-white"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export { EditCandidateForm };
