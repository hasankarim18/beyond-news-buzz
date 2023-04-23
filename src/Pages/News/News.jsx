import React from 'react';
import { useParams } from 'react-router-dom';

const News = () => {
   const {id} = useParams()
    return (
        <div>
            <h2>News details comming soon........ for id: {id} </h2>
        </div>
    );
};

export default News;