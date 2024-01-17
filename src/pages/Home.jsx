import { CandidateDetails } from "../components/CandidateDetails";
import { CandidatesList } from "../components/CandidatesList";

const Home = () => {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2">
      <CandidatesList />
      <CandidateDetails />
    </div>
  );
};

export { Home };
