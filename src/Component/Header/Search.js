import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import search1 from '../../assets/search.svg'
import { searchmenu } from '../../features/filter/filterslice';

const Search = () => {
    const {search}=useSelector(state=>state.filter)
    const [input,setinput]=useState(search)
    const dispach=useDispatch()
    const navigate=useNavigate()
    const match=useMatch("/")
    const handlesearh=(e)=>{
        e.preventDefault();
        dispach(searchmenu(input))
        if(!match){
            navigate("/")
        }
    }
    return (
        <div
        className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
    >
        {/* <!-- search --> */}
        <form onSubmit={handlesearh}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                onChange={(e)=>setinput(e.target.value)}
            />
        </form>
        <img
            className="inline h-4 cursor-pointer"
            src={search1}
            alt="Search"
        />
    </div>
    );
};

export default Search;