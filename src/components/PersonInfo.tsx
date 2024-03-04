import { useFetch } from "../utils/useFetch";
import { useFetchList } from "../utils/useFetchList";
import { getValue } from "../utils/utils";

export default function PersonInfo({ data }: { data: any }) {
	const { data: homeworld } = useFetch(data.homeworld);
	const films = useFetchList(data.films, true);
	const species = useFetchList(data.species);
	const starships = useFetchList(data.starships);
	const vehicles = useFetchList(data.vehicles);

	return (<>
		<h2>{data.name}</h2>
		<p>Ano de nascimento: <span>{data.birth_year}</span></p>
		<p>Altura: <span>{getValue(data.height, 'cm')}</span></p>
		<p>Peso: <span>{getValue(data.mass, 'kg')}</span></p>
		<p>Sexo: <span>{data.gender}</span></p>
		<p>Cor da pele: <span>{data.skin_color}</span></p>
		<p>Cor dos olhos: <span>{data.eye_color}</span></p>
		<p>Cor do cabelo: <span>{data.hair_color}</span></p>
		{data.species.length > 0 && <p>Espécies: <span>{species}</span></p>}
		<p>Planeta natal: <span>{homeworld?.name || '(...)'}</span></p>
		<p>Filmes: <span>{films || '(...)'}</span></p>
		{data.starships.length > 0 && <p>Naves pilotadas: <span>{starships || '(...)'}</span></p>}
		{data.vehicles.length > 0 && <p>Veículos pilotados: <span>{vehicles || '(...)'}</span></p>}
	</>);
}