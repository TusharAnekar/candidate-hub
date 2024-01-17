import { createContext, useContext, useEffect, useReducer } from "react";

import { getCandidatesService } from "../services/candidate-services";
import {
  candidatesReducer,
  initialCandidates,
} from "../reducers/candidate-reducer";

const CandidateContext = createContext();

const CandidateProvider = ({ children }) => {
  const [candidates, setCandidates] = useReducer(
    candidatesReducer,
    initialCandidates,
  );

  const getCandidates = async () => {
    try {
      const response = await getCandidatesService();
      const { data, status } = response;

      if (status === 200) {
        setCandidates({ type: "SET_CANDIDATES", payload: data });
      } else {
        console.error("Error while fetching data.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <CandidateContext.Provider value={{ candidates, setCandidates }}>
      {children}
    </CandidateContext.Provider>
  );
};

const useCandidateContext = () => useContext(CandidateContext);

export { CandidateProvider, useCandidateContext };
