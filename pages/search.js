import { useRouter } from "next/router"
import React, { FormEvent, useState} from "react"
import Header from "../components/Header"


export default function Search () {
    const [search, setSearch] = useState("");
    const router = useRouter();

    console.log(search);

    const searching = () => {
        router.push({
        pathname: "/results/",
        query: {
            searchinput: search
        } 

        });
    };

    return (
    <div>
        <Header />
        <h1>Search for {search}</h1>
        <input value={search} 
        onChange={(e) => setSearch(e.target.value)}    
    />
    <div>
        <button onClick={searching}>Submit</button>
    </div>

    </div>
    )
}