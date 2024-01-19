import axios from "axios";

const getCandidatesService = async () =>
  await axios.get("https://60d5a2c2943aa60017768b01.mockapi.io/candidate");

const createCandidateService = async (candidateDetails) =>
  await axios.post("https://60d5a2c2943aa60017768b01.mockapi.io/candidate", {
    candidateDetails,
  });

const deleteCandidateService = async (candidateId) =>
  await axios.delete(
    `https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${candidateId}`,
  );

const editCandidateService = async (candidateDetails) =>
  await axios.put(
    `https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${candidateDetails.id}`,
    { candidateDetails },
  );

export {
  getCandidatesService,
  createCandidateService,
  deleteCandidateService,
  editCandidateService,
};
