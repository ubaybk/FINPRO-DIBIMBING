import { useContext, useState } from "react"
import NavbarFollow from "../../components/navbarFolow"
import { followingContext } from "../../context/FollowingContextProvider"
const MyFollowers = () => {
    

    
    return (
        <>
        <div className="px-2">
            <NavbarFollow/>
            <h1>ini my followers</h1>
        </div>
        </>
    )
}

export default MyFollowers