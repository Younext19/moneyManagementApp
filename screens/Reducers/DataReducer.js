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
      if (state.Expenses === 0 || state.Expenses === undefined) {
        state.Expenses = [action.ExpensesData];
      } else {
        state.Expenses.push(action.ExpensesData);
      }
      return {
        TotalAmount: state.TotalAmount,
        Salary: state.Salary,
        Expenses: state.Expenses,
        Incomes: state.Incomes,
      };
    case ADD_INCOME:
      if (state.Incomes === 0 || state.Incomes === undefined) {
        state.Incomes = [action.IncomeData];
      } else {
        state.Incomes.push(action.IncomeData);
      }
      return {
        TotalAmount: state.TotalAmount,
        Salary: state.Salary,
        Expenses: state.Expenses,
        Incomes: state.Incomes,
      };
    case SAVESIGNUP:
      state.TotalAmount = 20;
      console.log('actinos');
      console.log(action.signupData);
      return {
        TotalAmount: state.TotalAmount,
        Salary: state.Salary,
        Expenses: state.Expenses,
        Incomes: state.Incomes,
      };
    default:
      return state;
  }
};

export default DatabaseReducer;
