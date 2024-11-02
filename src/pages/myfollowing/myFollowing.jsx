import axios from "axios"
import { useContext, useEffect, useState } from "react"
import NavbarFollow from "../../components/navbarFolow"
import {followingContext} from "../../context/FollowingContextProvider"





const MyFollowing = () => {
    // const [dataMyfollowing, setDataMyFollowing] = useState ([])
    // const apiKey = import.meta.env.VITE_API_KEY
    // const token = localStorage.getItem("token")

    const dataMyfollowing = useContext(followingContext)

    console.log('ini following context', dataMyfollowing.dataMyfollowing)
   

    // const getMyfollowing = () => {
    //     axios
    //         .get('https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/my-following?size=10&page=1',
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "apiKey": apiKey,
    //                     "Authorization": `Bearer ${token}`
    //                 }
    //             }
    //         )
    //         .then((res)=> {
    //             setDataMyFollowing(res.data)
    //         })
    // }
    // console.log('ini data my following',dataMyfollowing)

    // useEffect(()=> {
    //     NavbarFollow
    // },[])


    return(
        <>
        <div className="px-2">
            <NavbarFollow/>
            <h1>ini my following</h1>
            <div>
                {dataMyfollowing?.dataMyfollowing?.data?.users?.map((item, index) => (
                    <div key={index}>
                        <img src={item.profilePictureUrl} alt={item.username} />
                    </div>
                ))}
            </div>

        </div>
        </>
    )
}

export default MyFollowing