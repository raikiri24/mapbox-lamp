const initialState = {
  long: 0,
  lat: '',
  place: '',
  volts: '',
  power: '',
  luminosity: '',
  current: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        long: action.payload.long,
        lat: action.payload.lat,
        place: action.payload.place,
        volts: action.payload.volts,
        power: action.payload.power,
        luminosity: action.payload.luminosity,
        current: action.payload.current,
      };
    case 'FETCHED':
      return { ...state };

    default:
      return state;
  }
}

export { initialState, reducer };
