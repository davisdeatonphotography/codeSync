// /Volumes/T7/Programming/Projects/Active/codeSync/src/context/AppContext.js
import { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  selectedDirectory: '',
  selectedFiles: [],
  selectedOptions: {},
  // Add any other global state as needed
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_DIRECTORY':
      return { ...state, selectedDirectory: action.payload };
    case 'SET_SELECTED_FILES':
      return { ...state, selectedFiles: action.payload };
    case 'SET_SELECTED_OPTIONS':
      return { ...state, selectedOptions: action.payload };
    // Add additional actions as needed
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
