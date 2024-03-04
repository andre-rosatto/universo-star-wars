import { useFetch } from "../utils/useFetch";
import { useFetchList } from "../utils/useFetchList";
import { getValue } from "../utils/utils";

export default function SpeciesInfo({ data }: { data: any }) {
	const { data: homeworld } = useFetch(data.homeworld);
	const people = useFetchList(data.people);
	const films = useFetchList(data.films, true);

	return (<>
		<h2>{data.name}</h2>
		<p>Classificação: <span>{data.classification}</span></p>
		<p>Designação: <span>{data.designation}</span></p>
		<p>Altura média: <span>{getValue(data.average_height, 'cm')}</span></p>
		<p>Expectativa de vida: <span>{getValue(data.average_lifespan, ' anos')}</span></p>
		<p>Cores dos olhos: <span>{data.eye_colors}</span></p>
		<p>Cores do cabelo: <span>{data.hair_colors}</span></p>
		<p>Idioma: <span>{data.language}</span></p>
		{data.homeworld && <p>Planeta Natal: <span>{homeworld?.name || '(...)'}</span></p>}
		{data.people.length > 0 && <p>Pessoas: <span>{people || '(...)'}</span></p>}
		<p>Filmes: <span>{films || '(...)'}</span></p>
	</>);
}