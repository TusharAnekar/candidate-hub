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
    case "TOGGLE_IS_CANDIDATE_EDIT":
      return {
        ...state,
        isCandidateEdit: state.isCandidateEdit ? false : true,
      };
    case "SET_CANDIDATE_TO_EDIT":
      return { ...state, candidateToEdit: payload };
    case "EDIT_CANDIDATE":
      return {
        ...state,
        originalCandidates: state.originalCandidates.map((candidate) =>
          candidate.id === payload.id
            ? Object.assign(candidate, payload)
            : candidate,
        ),
      };
    default:
      return state;
  }
};

export { initialCandidates, candidatesReducer };
