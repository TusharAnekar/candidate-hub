import { useNavigate } from "react-router-dom";

import { useCandidateContext } from "../contexts/candidate-context";
import { CandidateCard } from "./CandidateCard";

const CandidatesList = () => {
  const navigate = useNavigate();

  const {
    candidates: { originalCandidates },
  } = useCandidateContext();

  const handleAddCandidate = () => {
    navigate("/candidate/new");
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        className="mb-4 w-full rounded-lg border bg-orange-600 p-2 text-white"
        onClick={handleAddCandidate}
      >
        Add Candidate
      </button>
      {originalCandidates.map((candidate) => (
        <CandidateCard candidate={candidate} key={candidate.id} />
      ))}
    </div>
  );
};

export { CandidatesList };
