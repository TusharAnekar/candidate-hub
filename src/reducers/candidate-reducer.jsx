const initialCandidates = {
  originalCandidates: [],
  isCandidateEdit: false,
  candidateToEdit: {},
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
    case "TOGGLE_IS_CANDIDATE_EDIT":
      return { ...state, isCandidateEdit: !state.isCandidateEdit };
    case "SET_CANDIDATE_TO_EDIT":
      return { ...state, candidateToEdit: payload };
    default:
      return state;
  }
};

export { initialCandidates, candidatesReducer };
