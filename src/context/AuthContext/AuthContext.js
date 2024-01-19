const {createContext,useReducer} = require("react");



// auth context
// first we are going to create auth context
export const authContext =  createContext()



//Initial state 
// next we are going to create the initial state for the user context
const INITIAL_STATE={
  // we want to keep track of the authentication status of the user 
  userAuth:null,
  error:null,
  // i also want to keep track of the loading status so that
  // i can give user a good user experience 

  loading:false,
  profile:null,
  };

  // next is we want to find a way to update these states to achieve that we are going to use a hook called use useReducer
    //  you should must call the useReducer inside the provider, might be inside the component 



  //provider
// next we will create a provider which is going to serve us the high order function
// it is going to take a component that is going to take a data from this context
const AuthContextProvider=({children})=>{
// we call useReducer as a function and for this it will take a two arguments first is call back function and initial state

useReducer(()=>{},INITIAL_STATE);

return (
  // it is going to provide data to other component
  <authContext.Provider>{children}</authContext.Provider>
)
}