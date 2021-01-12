import {State} from 'react-native-gesture-handler';

const initialState = {
  TotalAmount: 10,
  Salary: 20,
};

const DatabaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 1:
      state.TotalAmount = 20;
      return {
        TotalAmount: state.TotalAmount,
        Salary: state.Salary,
      };
    default:
      return state;
  }
};

export default DatabaseReducer;
