'use client';
import { useContext } from "react"
import { DashboardContext } from "../context"

export const useDashboardContext = ()=>{
    const context = useContext(DashboardContext)

    if(!context){
        throw Error("UseContextHooks must be created inside FormProvider");
    }

    return context
}