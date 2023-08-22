import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AbsoluteCenter } from "@chakra-ui/react";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";



export interface Platform{
  id: number;
  name: string;
  slug: string;
}

// using the interface Game to destructure the data we want to fetch.
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number

  }
  
  // interface FetchGameResponse {
  //   count: number;
  //   results: Game[];
  // }

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games',{params: {genres:selectedGenre?.id, parent_platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;
