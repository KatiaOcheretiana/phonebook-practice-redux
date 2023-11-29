const initialState = {
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/changeFilter':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const changeFilter = value => {
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
};
