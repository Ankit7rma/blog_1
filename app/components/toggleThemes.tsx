'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const ToggleThemes = () => {
    const {systemTheme,theme,setTheme} = useTheme();
    const [mounted,setMounted] = useState(false)
    useEffect(()=>{
    setMounted(true)
    },[])
    if(!mounted) return null

    const currentTheme = theme==='system'?systemTheme:theme;
    return ( 
        <div>
        {currentTheme === "dark"?
        (<button onClick={()=>{setTheme("light")}}> 
            <FiSun/>
        </button>):
        (<button onClick={()=>{setTheme("dark")}}>
            <FaMoon/>
        </button>)    
    }
        </div>
     );
}
 
export default ToggleThemes;