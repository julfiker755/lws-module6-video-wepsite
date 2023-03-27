import { axiosinstance } from "../../utilis/axios"

export const gettag=async()=>{
    const res=await axiosinstance.get("/tags")
    return res.data
}