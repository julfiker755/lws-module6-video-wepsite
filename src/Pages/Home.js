import React from 'react';
import Pagination from '../Component/Pagination/Pagination';
import Tags from '../Component/Tags/Tags';
import Videogrid from '../Component/Videogrid/Videogrid';

const Home = () => {
    return (
        <>
          <Tags></Tags>
          <Videogrid></Videogrid>  
          <Pagination></Pagination>
        </>
    );
};

export default Home;