import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres"


const GenerList = () => {

    const {data} = useData<Genre>('/genres');

  return (
    <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenerList