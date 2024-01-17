import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import { CandidatesList } from "../components/CandidatesList";
import { SkillForm } from "../components/SkillForm";
import { EducationForm } from "../components/EducationForm";
import { ExperienceForm } from "../components/ExperienceForm";
import { useCandidateContext } from "../contexts/candidate-context";

const NewCandidate = () => {
  const { createCandidate } = useCandidateContext();

  const [candidateDetails, setCandidateDetails] = useState({
    id: uuidv4(),
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

  const handleSubmitDetails = () => {
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
      setCandidateDetails({ ...candidateDetails, id: uuidv4() });
      createCandidate(candidateDetails);
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
    }
  };

  return (
    <div className="flex-col gap-4 p-4 md:grid md:grid-cols-2">
      <CandidatesList />

      <div>
        <h2 className="text-xl font-bold">Candidate Details</h2>
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
              className="mb-2 block w-full rounded-lg border p-1"
              required
              onChange={handleTextarea}
            ></textarea>
          </section>

          <button
            type="submit"
            className="rounded-lg bg-blue-500 p-2 text-white"
          >
            Save
          </button>
        </form>

        <EducationForm
          candidateDetails={candidateDetails}
          setCandidateDetails={setCandidateDetails}
        />

        <SkillForm
          candidateDetails={candidateDetails}
          setCandidateDetails={setCandidateDetails}
        />

        <ExperienceForm
          candidateDetails={candidateDetails}
          setCandidateDetails={setCandidateDetails}
        />

        <button
          className="w-full rounded-lg bg-orange-600 p-2 text-white"
          onClick={handleSubmitDetails}
        >
          Submit Details
        </button>
      </div>
    </div>
  );
};

export { NewCandidate };
