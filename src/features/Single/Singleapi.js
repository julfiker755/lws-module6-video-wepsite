import { axiosinstance } from "../../utilis/axios"

export const getsingle=async(vid)=>{
    const res=await axiosinstance.get(`/videos/${vid}`)
    return res.data
}