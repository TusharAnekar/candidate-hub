import { useCandidateContext } from "../contexts/candidate-context";
import { EditCandidateForm } from "./EditCandidateForm";

const CandidateDetails = ({ candidate }) => {
  const {
    candidates: { isCandidateEdit },
    setCandidates,
    deleteCandidate,
  } = useCandidateContext();

  const {
    id,
    profile_picture,
    name,
    email,
    gender,
    hobbies,
    education,
    skills,
    experience,
  } = candidate;

  const handleEdit = (id) => {
    setCandidates({ type: "TOGGLE_IS_CANDIDATE_EDIT" });
    setCandidates({ type: "SET_CANDIDATE_TO_EDIT", payload: candidate });
  };

  const handleDelete = (id) => {
    deleteCandidate(id);
  };

  return (
    <div className="p-4">
      {isCandidateEdit ? (
        <EditCandidateForm />
      ) : (
        <>
          <div className="flex justify-between ">
            <h2 className="text-xl font-bold">Candidate Details</h2>

            <div className="flex gap-2">
              <button
                className="rounded-lg bg-yellow-500 px-2 py-1 text-white"
                onClick={() => handleEdit(id)}
              >
                Edit
              </button>
              <button
                className="rounded-lg bg-red-600 px-2 py-1 text-white"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          </div>

          <section>
            <h3 className="text-lg font-semibold">Part 1</h3>
            <img
              src={profile_picture}
              alt={name}
              className="mx-auto aspect-square w-44 rounded-full"
            />
            <p>
              <span className="font-semibold">Name: </span> {name}
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              {email}
            </p>
            <p>
              <span className="font-semibold">Gender: </span>
              {gender}
            </p>
            <p>
              <span className="font-semibold">Hobbies: </span>
              {hobbies}
            </p>

            {/* <ul className="flex gap-2">
          <p className="font-semibold">Hobbies:</p>
          {hobbies?.map((hobbie) => (
            <li>{hobbie}</li>
          ))}
        </ul> */}
          </section>

          <section className="mt-4">
            <h3 className="mb-2 text-lg font-semibold">Part 2: Education</h3>
            <div className="flex flex-col gap-4">
              {education.map(
                ({ degree, institute, pass_out_year, percentage }) => (
                  <div className="rounded-lg border p-4">
                    <p>
                      <span className="font-semibold">Institue:</span>{" "}
                      {institute}
                    </p>
                    <p>
                      {" "}
                      <span className="font-semibold">Degree: </span>
                      {degree}
                    </p>
                    <p>
                      <span className="font-semibold">Pass Out Year:</span>{" "}
                      {pass_out_year}
                    </p>
                    <p>
                      <span className="font-semibold">Percentage:</span>{" "}
                      {percentage} %
                    </p>
                  </div>
                ),
              )}
            </div>
          </section>

          <section className="my-4">
            <h3 className="mb-2 text-lg font-semibold">Part 3: Skills</h3>
            <div className="flex flex-col gap-4">
              {skills.map(({ name, experience }) => (
                <div className="flex justify-between rounded-lg border p-4">
                  <p>
                    <span className="font-semibold">Language/Library: </span>
                    {name}
                  </p>
                  <p>
                    <span className="font-semibold">Experience: </span>
                    {experience}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="my-4">
            <h3 className="mb-2 text-lg font-semibold">
              Part 4: Proffessional Experience
            </h3>
            <div className="flex flex-col gap-4">
              {experience.map(
                ({
                  company,
                  duration_from,
                  duration_to,
                  project,
                  role,
                  team_size,
                }) => (
                  <div className="rounded-lg border p-4">
                    <p>
                      <span className="font-semibold">Company: </span>
                      {company}
                    </p>
                    <p>
                      <span className="font-semibold">Project: </span>
                      {project}
                    </p>
                    <p>
                      <span className="font-semibold">Duration: </span>
                      {duration_from} - {duration_to}
                    </p>
                    <p>
                      <span className="font-semibold">Role: </span>
                      {role}
                    </p>
                    <p>
                      <span className="font-semibold">Team Size: </span>
                      {team_size}
                    </p>
                  </div>
                ),
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export { CandidateDetails };
