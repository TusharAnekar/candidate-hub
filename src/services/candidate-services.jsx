import axios from "axios";

const getCandidatesService = async () =>
  await axios.get("https://60d5a2c2943aa60017768b01.mockapi.io/candidate");

export { getCandidatesService };