const initialState = [];

const markersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_MARKERS": {
      return [
        ...action.payload.map((m) => ({
          title: m.title,
          desc: m.desc,
          id: m.id,
          position: [m.position_lat, m.position_long],
        })),
      ];
    }
    case "ADD_MARKER": {
      return [
        ...state,
        {
          position: action.payload.location,
          title: action.payload.title,
          id: action.payload.id,
          desc: action.payload.desc,
        },
      ];
    }
    case "CLEAR_MARKERS": {
      return [];
    }
    case "DELETE_MARKER": {
      return state.filter((marker) => marker.id !== action.payload);
    }
    default:
      return state;
  }
};

export default markersReducer;
