import { useNavigate } from "react-router-dom";
import { CandidatesList } from "../components/CandidatesList";

const Home = () => {
  const navigate = useNavigate();

  const handleAddCandidate = () => {
    navigate("/candidate/new");
  };

  return (
    <div className="flex-col gap-4 md:grid md:grid-cols-2">
      <div className="p-4">
        <button
          className="mb-4 w-full rounded-lg border bg-orange-600 p-2 text-white"
          onClick={handleAddCandidate}
        >
          Add Candidate
        </button>
        <CandidatesList />
      </div>
      <h2 className="p-4 text-center text-xl font-semibold">
        Select a candidate to see details here.
      </h2>
    </div>
  );
};

export { Home };
