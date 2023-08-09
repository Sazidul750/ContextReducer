import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";


export const UserContext=createContext()


const ContextProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)

const value={
    users:state.users,
    addUser:(newUser)=>{
        dispatch({type:"ADD_USER",payload:newUser})
    },
    deleteUser:(id)=>{
        dispatch({type:"DELETE_USER",payload:id})
    },
}
   
return<UserContext.Provider value={value}>
{children}
</UserContext.Provider>
}


export default ContextProvider;