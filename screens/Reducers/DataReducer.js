export const SAVESIGNUP = 'save_sign_up';
export const ADD_EXPENSES = 'add_expenses';
export const ADD_INCOME = 'add_income';
const initialState = {
  TotalAmount: 10,
  Salary: 20,
  Expenses: [],
  Incomes: [],
};

const DatabaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSES:
      console.log(state);
      if (state.Expenses.length === 0) {
        state.Expenses.push(action.ExpensesData);
      } else {
        state.Expenses = action.ExpensesData;
      }
      return {
        TotalAmount: state.TotalAmount,
        Salary: state.Salary,
        Expenses: state.Expenses,
      };
    case ADD_INCOME:
      console.log(action);
      if (state.Expenses.length === 0) {
        state.Incomes.push(action.IncomeData);
      } else {
        state.Incomes = action.IncomeData;
      }
      return {
        TotalAmount: state.TotalAmount,
        Salary: state.Salary,
      };
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
