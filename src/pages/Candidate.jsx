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
    <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-2 md:gap-4">
      <div className="max-sm:order-last">
        <CandidatesList />
      </div>
      <CandidateDetails candidate={candidate} />
    </div>
  );
};

export { Candidate };
