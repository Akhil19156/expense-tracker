import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer';

//initial state
const initialstate={
    transactions:[]
 
}

//createContext
export const GlobalContext=createContext(initialstate);

//provider component
export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialstate);

    //actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}