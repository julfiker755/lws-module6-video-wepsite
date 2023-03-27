import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Discripation from '../Component/Discripation/Discripation';
import Relatedv from '../Component/Relatedv/Relatedv';
import Videoplayer from '../Component/Videoplayer/Videoplayer';
import { fetchsingle } from '../features/Single/Singleslice';

const SingleVideo = () => {
    const {vid}=useParams()
    const dispatch=useDispatch()
    const {single,isLoading,isError,error}=useSelector(state=>state.single)
    useEffect(()=>{
        dispatch(fetchsingle(vid))
    },[dispatch])
    const {id,link,title,tags}=single || {}
    let content=null;
    if(isLoading) content=<h1>Loaing....</h1>
    if(!isLoading && isError) content=<div className="col-span-12">{error}</div>
    if(!isLoading && !isError && !single?.id){
        content=<div className="col-span-12">Your Video not found</div>
    }
    if(!isLoading && !isError && single?.id){
        content= <div class="grid grid-cols-3 gap-2 lg:gap-8">
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
            {/* <!-- video player --> */}
            <Videoplayer link={link} title={title}></Videoplayer>

            {/* <!-- video description --> */}
              <Discripation single={single}></Discripation>
        </div>

        {/* <!-- related videos --> */}
         <Relatedv tags={tags} id={id} ></Relatedv>
    </div>
    }
    return (
        <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
           {content}
        </div>
    </section>
    );
};

export default SingleVideo;