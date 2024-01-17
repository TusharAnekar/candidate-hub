import { useCandidateContext } from "../contexts/candidate-context";
import { CandidateCard } from "./CandidateCard";

const CandidatesList = () => {
  const {
    candidates: { originalCandidates },
  } = useCandidateContext();

  return (
    <div className="flex flex-col gap-4 p-4">
      {originalCandidates.map((candidate) => (
        <CandidateCard candidate={candidate} key={candidate.id} />
      ))}
    </div>
  );
};

export { CandidatesList };
