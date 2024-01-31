import React, { createContext, useContext, useState } from "react";
import Linkdata from "./Data";
const AppContext = createContext()
const AppProvider = ({children})=>{
    const [sidebaropen,setSidebaropen] = useState(false)
    const [issubmenuopen,setIssubmenuopen] = useState(false)
    const [page,setPage] = useState({page: '', link: []})
    const [location,setLocation] = useState({})

    const opensubmenu = (text,coordinates)=>{
        setIssubmenuopen(true)
        const page = Linkdata.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        
    }
    const closesubmenu = () =>{
        setIssubmenuopen(false)
    }
    const opensidebar = ()=>{
        setSidebaropen(true)
    }
    const closesidebar = ()=>{
        setSidebaropen(false)
    }
    return(
        <AppContext.Provider
        value={{issubmenuopen,page,location,opensubmenu,closesubmenu,sidebaropen,opensidebar,closesidebar}}
        >
            {children}
        </AppContext.Provider>
    )
}
export const GlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}