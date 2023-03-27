import { axiosinstance } from "../../utilis/axios"

export const getvideos=async(tags,search)=>{
  console.log(tags)
  let queryString='';
  if(tags?.length > 0){
    queryString+=tags.map(tag=>`tags_like=${tag}`).join('&')
  }
  if(search !== ''){
    queryString+=`&q=${search}`
  }
  const res=await axiosinstance.get(`/videos/?${queryString}`)
  return res.data
}