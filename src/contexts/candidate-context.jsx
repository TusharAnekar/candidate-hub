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
import { toast } from "react-toastify";

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
    console.log("new form", candidateDetails);
    try {
      const response = await createCandidateService(candidateDetails);
      console.log(response);
      const { data, status } = response;

      if (status === 201) {
        setCandidates({ type: "ADD_CANDIDATE", payload: data });
        toast.success("Candidate added successfully!");
        navigate("");
      } else {
        toast.error("Error while creating/adding candidate.");
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
        toast.success("Candidate deleted successfully!");
        navigate("");
      } else {
        toast.error("Error while deleting data.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editCandidate = async (candidateDetails) => {
    console.log(candidateDetails, "edit form");
    try {
      const response = await editCandidateService(candidateDetails);
      console.log(response);
      const { data, status } = response;

      if (status === 200) {
        setCandidates({ type: "EDIT_CANDIDATE", payload: data });
        toast.success("Candidate details edited successfully");
        navigate(`/candidate/${data.id}`);
      } else {
        toast.error("Error while editing candidate.");
      }
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
