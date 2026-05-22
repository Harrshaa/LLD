import { useEffect, useState } from "react";
import MemeCard from "./Memecard";
import Shimmer from "./Shimmer";
import About from "./About";

const Body=()=>{
    const [memes,setMemes] = useState(null);
    useEffect(()=>{
        fetchMemes();

    },[])

    const fetchMemes=async()=>{
        const data = await fetch("https://meme-api.com/gimme/100");
        const json = await data.json();
        console.log(json)
        setMemes(json.memes);

    }
    return(
 


        <div className="">
            {!memes ? (<Shimmer/>) : (
                memes.map((item,index)=>(
                    <MemeCard key={index} data={item}/>
                ))
            )  }

        </div>
    )
}

export default Body;