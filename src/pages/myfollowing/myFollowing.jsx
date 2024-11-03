import axios from "axios"
import { useContext, useEffect, useState } from "react"
import NavbarFollow from "../../components/navbarFolow"
import {followingContext} from "../../context/FollowingContextProvider"





const MyFollowing = () => {
    

    const {dataMyfollowing} = useContext(followingContext)

    console.log('ini following context', dataMyfollowing)
   
    return(
        <>
        <div className="px-2">
            <NavbarFollow/>
            <h1>ini my following</h1>
            <div className="mb-32">
                {dataMyfollowing?.data?.users?.map((item, index) => (
                    <div key={index}>
                        <img src={item.profilePictureUrl} alt={item.username} />
                        <p>{item.username}</p>
                    </div>
                ))}
            </div>

        </div>
        </>
    )
}

export default MyFollowing