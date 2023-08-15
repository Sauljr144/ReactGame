import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AbsoluteCenter } from "@chakra-ui/react";
import { CanceledError } from "axios";
import useData from "./useData";



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

const useGames = () => useData<Game>('/games');

export default useGames;
