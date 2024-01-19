'use client';
import {  createContext, useReducer } from "react";

export const DashboardContext = createContext()

export const dashboardReducer = (state,action)=>{
    switch(action.type){
        case 'NAVIGATION_BAR':
            return {
                steps:action.payload
            }    

        default :
        return state
    }
}

export const DashboardContexProvider =({children})=>{

    const [state,dispatch] = useReducer(dashboardReducer,{
        steps:1
       
    })
    
    return(
        <DashboardContext.Provider value={{...state,dispatch}}>
            {children}
        </DashboardContext.Provider>
    )
}