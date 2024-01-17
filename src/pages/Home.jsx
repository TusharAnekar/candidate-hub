import { CandidatesList } from "../components/CandidatesList";

const Home = () => {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2">
      <CandidatesList />
      <h2 className="p-4 text-center text-xl font-semibold">
        Select a candidate to see details here.
      </h2>
    </div>
  );
};

export { Home };
