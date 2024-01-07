'use client';
import {  createContext, useReducer } from "react";

export const FormContext = createContext()

export const formReducer = (state,action)=>{
    switch(action.type){

        case 'SET_WORKOUT':
            return {
                steps:action.payload
            }

        case 'CREATE_WORKOUT':
             
            return {
                steps:action.payload        
            }

        case 'DELETE_WORKOUT':
            return {
                steps: state.workouts.filter(w => w._id !== action.payload._id)
            }

        case 'CREATE_FORM':
            
            return {
                data:action.payload
            }

        default :
        return state
    }
}

export const FormContexProvider =({children})=>{

    const [state,dispatch] = useReducer(formReducer,{
        data:{ steps:0,formData:{},legalData:{},shippingFulfillmentData:{},legalAgreements:{}}
        //formData:{},legalData:{},shippingFulfillmentData:{},legalAgreements:{}
    })
    
    return(
        <FormContext.Provider value={{...state,dispatch}}>
            {children}
        </FormContext.Provider>
    )
}