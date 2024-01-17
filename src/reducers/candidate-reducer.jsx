const initialCandidates = {
  originalCandidates: [],
};

const candidatesReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_CANDIDATES":
      return { ...state, originalCandidates: payload };
    default:
      return state;
  }
};

export { initialCandidates, candidatesReducer };
