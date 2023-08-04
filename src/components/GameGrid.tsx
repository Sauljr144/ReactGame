import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

// using the interface Game to destructure the data we want to fetch.
interface Game{
    id: number, 
    name: string
}

interface FetchGameResponse{
    count: number,
    results: Game []
}


const GameGrid = () => {

    const [games, setGames] = useState<Game[]>([]) //setting the type of useState with the Game interface
    const [error, setError] = useState('')

useEffect(() => {
    apiClient.get<FetchGameResponse>('/games')
    .then(response => setGames(response.data.results))
    .catch(error => setError(error.message))


}, []) //always have the dependacy [value]

  return (
    <ul>
        {error && <Text>{error}</Text>}
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  )
}

export default GameGrid