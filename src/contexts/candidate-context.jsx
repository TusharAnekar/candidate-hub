import { createContext, useContext, useEffect, useReducer } from "react";

import {
  createCandidateService,
  deleteCandidateService,
  editCandidateService,
  getCandidatesService,
} from "../services/candidate-services";
import {
  candidatesReducer,
  initialCandidates,
} from "../reducers/candidate-reducer";
import { useNavigate } from "react-router-dom";

const CandidateContext = createContext();

const CandidateProvider = ({ children }) => {
  const [candidates, setCandidates] = useReducer(
    candidatesReducer,
    initialCandidates,
  );

  const navigate = useNavigate();

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

  const createCandidate = async (candidateDetails) => {
    try {
      const response = await createCandidateService(candidateDetails);
      console.log(response);
      const { data, status } = response;

      if (status === 201) {
        setCandidates({ type: "ADD_CANDIDATE", payload: data });
      } else {
        console.log("Error while creating/adding candidate.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCandidate = async (id) => {
    try {
      const response = await deleteCandidateService(id);
      const { data, status } = response;

      if (status === 200) {
        setCandidates({ type: "DELETE_CANDIDATE", payload: data });
        navigate("");
      } else {
        console.log("Error while deleting data.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editCandidate = async (id) => {
    try {
      const response = await editCandidateService(id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CandidateContext.Provider
      value={{
        candidates,
        setCandidates,
        createCandidate,
        deleteCandidate,
        editCandidate,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};

const useCandidateContext = () => useContext(CandidateContext);

export { CandidateProvider, useCandidateContext };
