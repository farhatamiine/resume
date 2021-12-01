export default function personalInfoReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_PERSONAL_INFO':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_PERSONAL_INFO_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
