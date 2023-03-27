import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removetag, tagselected } from '../../features/filter/filterslice';

const Tag = ({title}) => {
     const dispach=useDispatch()
     const {tags}=useSelector(state=>state.filter)
     const isselected=tags.includes(title) ? true:false
     const handleremove=()=>{
        if(isselected){
             dispach(removetag(title))
        }else{
            dispach(tagselected(title))
        }
      
     }
     const style=isselected ? "bg-[purple] text-white px-4 py-1 rounded-full cursor-pointer" :"bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    return (
        <div
                    className={style}
                    onClick={()=>handleremove()}
                >
                    {title}
                </div>
    );
};

export default Tag;