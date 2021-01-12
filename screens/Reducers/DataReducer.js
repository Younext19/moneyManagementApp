export const SAVESIGNUP = 'save_sign_up';

const initialState = {
  TotalAmount: 10,
  Salary: 20,
};

const DatabaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVESIGNUP:
      state.TotalAmount = 20;
      console.log('actinos');
      console.log(action.signupData);
      return {
        TotalAmount: state.TotalAmount,
        Salary: state.Salary,
      };
    default:
      return state;
  }
};

export default DatabaseReducer;
