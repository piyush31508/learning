import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from 'axios';
const Home = () => {
    const { username } = useContext(AppContext);
    const { data: catData, isLoading, isError, refetch } = useQuery({
        queryKey: ["cats"],
        queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data),
    });

    if(isError){
        return <h1>Error fetching data</h1>
    }
    if(isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Home </h1>
            <p>{catData?.fact}</p>
            <button onClick={refetch}>Update data</button>
            <p>Welcome to the home page. The user is {username}</p>
        </div>
    )
}

export default Home;