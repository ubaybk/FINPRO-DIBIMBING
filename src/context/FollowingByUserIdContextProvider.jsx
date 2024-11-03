import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const followingByUserIdContext = createContext()

export const FollowingByUserIdContextProvider = ({children}) => {
    const { userId } = useParams();
    const [dataFollowingByUserId, setDataFollowingByUserId] = useState ([])

    const apiKey = import.meta.env.VITE_API_KEY
    const token = localStorage.getItem("token")

    const getFollowingByUserIdContextProvider = () => {
        axios
            .get(`https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/following/${userId}/?size=10&page=1`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        apiKey: apiKey,
                        Authorization: `Bearer ${token}`,
                      },
                }
            )
            .then((res)=> {
                console.log(res.data);
                setDataFollowingByUserId(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=> {
        getFollowingByUserIdContextProvider()
    },[userId])

    console.log('context byID',dataFollowingByUserId)
    console.log(userId)

    return(
        <followingByUserIdContext.Provider value={{dataFollowingByUserId}}>
            {children}
        </followingByUserIdContext.Provider>
    )

}