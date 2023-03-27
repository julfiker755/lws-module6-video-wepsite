import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetachtags } from '../../features/Tag/Tagslice';
import Tag from './Tag';

const Tags = () => {
    const dispatch=useDispatch()
    const {tags}=useSelector(state=>state.tags)
    useEffect(()=>{
        dispatch(fetachtags())
    },[])

    return tags?.length > 0 ? <section>
    <div
        className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
    >
        {/* <!-- selected --> */}
        {tags.map(tagi=><Tag {...tagi}></Tag>)}
    </div>
</section>:null
};

export default Tags;