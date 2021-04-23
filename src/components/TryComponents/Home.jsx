import React from 'react';
import useFetch from '../Hooks/useFetch';

const Home = (props)=>{

    let url = "https://jsonplaceholder.typicode.com/posts"
    const {data:datas, isPending, error} = useFetch(url);

    
    return(
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ... </div>}
            {datas && <div>{datas.map((data, index)=><li key={index}>{JSON.stringify(data)}</li>)}</div>}
        </div>
    );
}

export default Home;