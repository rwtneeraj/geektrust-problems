import React, { children, createContext } from "react";
import { useState } from "react";
import Users from "../../data/data.json";


 export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  
    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState(Users);
    const [fromUserNo, setFromUserNo] = useState(0);
    const [toUserNo, setToUserNo] = useState(10);
    const [ deletedUser, setDeletedUser ] = useState(null);

    return (<UserContext.Provider value={{currentPage,setCurrentPage,users,setUsers,fromUserNo,setFromUserNo,toUserNo,setToUserNo,deletedUser,setDeletedUser}}>{children}</UserContext.Provider>);
}
