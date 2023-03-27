import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelated } from '../../features/Related/Relatedslice';
import Relatedsingle from './Relatedsingle';

const Relatedv = ({tags,id}) => {
    const dispatch=useDispatch()
    const {relatedVideos,isLoading,isError,error}=useSelector(state=>state.related)
    useEffect(()=>{
       dispatch(fetchRelated({tags,id}))
    },[])
    let content=null
    if(isLoading) content=<h1>Loading....</h1>
    if(!isLoading && isError) content = <div className="col-span-12">{error}</div>;
    if(!isLoading && !isError && relatedVideos?.length === 0){
        content=<div className="col-span-12">Your Video not found</div>;
    }
    if(!isLoading && !isError && relatedVideos?.length > 0){
       content=relatedVideos.map(vitem=><Relatedsingle key={vitem.id} vitem={vitem}></Relatedsingle>)
    }
    return (
        <div
                    class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
                >
                    {/* <!-- single related video --> */}
                     {content}
                </div>
    );
};

export default Relatedv;