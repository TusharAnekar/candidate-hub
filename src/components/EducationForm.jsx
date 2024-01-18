import { useState } from "react";
import { toast } from "react-toastify";

const EducationForm = ({
  candidateDetails,
  setCandidateDetails,
  education,
}) => {
  const [educationDetails, setEducationDetails] = useState({
    degree: education ? education.degree : "",
    institute: education ? education.institute : "",
    pass_out_year: education ? education.pass_out_year : "",
    percentage: education ? education.percentage : "",
  });

  const handleInput = (e) => {
    setEducationDetails({
      ...educationDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (candidateDetails.education.length >= 10) {
      toast.error("Maximum 10 education entries allowed.");
      setEducationDetails({
        educationDetails,
        degree: "",
        institute: "",
        pass_out_year: 0,
        percentage: 0,
      });
    } else if (
      educationDetails.institute === "" ||
      educationDetails.degree === "" ||
      educationDetails.pass_out_year <= 0 ||
      educationDetails.percentage <= 0
    ) {
      toast.error("Please enter all the fields in Step2: Education Form");
    } else {
      setCandidateDetails({
        ...candidateDetails,
        education: [...candidateDetails.education, educationDetails],
      });
      setEducationDetails({
        educationDetails,
        degree: "",
        institute: "",
        pass_out_year: 0,
        percentage: 0,
      });
    }
  };

  return (
    <section className="my-4">
      <h3 className="mb-2 text-lg font-semibold">Step 2: Education</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="institute" className="block">
          Institute:{" "}
        </label>
        <input
          type="text"
          name="institute"
          id="institute"
          value={educationDetails.institute}
          className="mb-2 block w-full rounded-lg border p-1"
          required={candidateDetails.education.length ? false : true}
          onChange={handleInput}
        />

        <label htmlFor="degree" className="block">
          Degree:{" "}
        </label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={educationDetails.degree}
          className="mb-2 block w-full rounded-lg border p-1"
          required={candidateDetails.education.length ? false : true}
          onChange={handleInput}
        />

        <label htmlFor="pass_out_year" className="block">
          Pass out year:{" "}
        </label>
        <input
          type="number"
          name="pass_out_year"
          id="pass_out_year"
          value={educationDetails.pass_out_year}
          className="mb-2 block w-full rounded-lg border p-1"
          required={candidateDetails.education.length ? false : true}
          onChange={handleInput}
        />

        <label htmlFor="percentage" className="block">
          Percentage:{" "}
        </label>
        <input
          type="number"
          name="percentage"
          id="percentage"
          value={educationDetails.percentage}
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

export { EducationForm };
