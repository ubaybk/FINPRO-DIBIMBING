import { useContext, useEffect, useState } from "react"
import NavbarFollow from "../../components/navbarFolow"
import { followingByUserIdContext } from "../../context/FollowingByUserIdContextProvider"


const FollowingUserId = () => {
    const datafollowingByUserIdContext = useContext(followingByUserIdContext)
    
    console.log('following by user id', datafollowingByUserIdContext)
    return (
        <>
         <div className="px-2">
            {/* <NavbarFollow/> */}
            <h1>ini my following</h1>
            <div className="mb-32">
                {datafollowingByUserIdContext?.dataFollowingByUserId
?.data?.users?.map((item, index) => (
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

export default FollowingUserId