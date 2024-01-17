const initialCandidates = {
  originalCandidates: [],
};

const candidatesReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_CANDIDATES":
      return { ...state, originalCandidates: payload };
    case "ADD_CANDIDATE":
      return {
        ...state,
        originalCandidates: [...state.originalCandidates, payload],
      };
    case "DELETE_CANDIDATE":
      return {
        ...state,
        originalCandidates: state.originalCandidates.filter(
          ({ id }) => id !== payload.id,
        ),
      };
    case "EDIT_CANDIDATE":
      return { ...state };
    default:
      return state;
  }
};

export { initialCandidates, candidatesReducer };
