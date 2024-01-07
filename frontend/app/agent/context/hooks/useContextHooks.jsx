'use client';
import { useContext } from "react"
import { FormContext } from "../context"

export const useFormContext = ()=>{
    const context = useContext(FormContext)

    if(!context){
        throw Error("UseContextHooks must be created inside FormProvider");
    }

    return context
}