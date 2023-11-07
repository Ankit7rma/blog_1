'use client'
import { useState } from "react";
import { createContext } from "vm";

type ContextType={
    loading:boolean;
    setLoading:(loading:boolean)=>void;
}
const [loading,setLoading] = useState(false)

export const GlobalContext = createContext<ContextType| null>(null);