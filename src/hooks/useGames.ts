import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AbsoluteCenter } from "@chakra-ui/react";
import { CanceledError } from "axios";

// using the interface Game to destructure the data we want to fetch.
export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]); //setting the type of useState with the Game interface
    const [error, setError] = useState("");
  
    useEffect(() => {

        const controller = new AbortController(); //disconnects from API

      apiClient
        .get<FetchGameResponse>("/games", {signal: controller.signal})
        .then((response) => setGames(response.data.results))
        .catch((error) => {
            if(error instanceof CanceledError) return;
            setError(error.message)
        });

        return() => controller.abort();

    }, []); //always have the dependacy [value]
    return {games, error}
}

export default useGames;
