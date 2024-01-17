import { useParams } from "react-router-dom";

import { CandidatesList } from "../components/CandidatesList";
import { CandidateDetails } from "../components/CandidateDetails";
import { useCandidateContext } from "../contexts/candidate-context";

const Candidate = () => {
  const { candidateId } = useParams();
  const {
    candidates: { originalCandidates },
  } = useCandidateContext();

  const candidate = originalCandidates.find(({ id }) => id === candidateId);

  return (
    <div className="grid grid-rows-2 p-4 md:grid-cols-2">
      <CandidatesList />
      <CandidateDetails candidate={candidate} />
    </div>
  );
};

export { Candidate };
