const initialState = {}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_MUSICLIST_SUCCESS':
      console.log("debug - 000", action.payload);
      return {
        ...state,
        musicList: action.payload
      }
    default:
      return state;
  }
}
