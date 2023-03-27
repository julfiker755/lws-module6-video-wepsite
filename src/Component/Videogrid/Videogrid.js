import React, { useEffect } from 'react';
import Singlegrid from './Singlegrid';
import { useSelector, useDispatch } from 'react-redux'
import { fetchvideos } from '../../features/videos/Videosslice';

const Videogrid = () => {
    const dispatch=useDispatch()
    const {videos,isLoading,isError,error}=useSelector(state=>state.videos)
    const {tags,search}=useSelector(state=>state.filter)
    useEffect(()=>{
        dispatch(fetchvideos({tags,search}))
    },[dispatch,tags,search])
    let content=null;
    if(isLoading) content=<h1>Loaing....</h1>
    if(!isLoading && isError) content=<div className="col-span-12">{error}</div>
    if(!isLoading && !isError && videos?.length === 0){
        content=<div className="col-span-12">Your Video not found</div>
    }
    if(!isLoading && !isError && videos?.length > 0){
        content=videos.map(svideo=><Singlegrid key={svideo.id} svideo={svideo}></Singlegrid>)
    }
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {/* <!-- single video --> */}
                     {content}  
                    {/* <!-- error section
                    <div className="col-span-12">some error happened</div> --> */}
                </div>
            </section>
        </section>
    );
};

export default Videogrid;