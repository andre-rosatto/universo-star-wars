import { useFetchList } from "../utils/useFetchList";

export default function FilmInfo({ data }: { data: any }) {
	const characters = useFetchList(data.characters);
	const planets = useFetchList(data.planets);
	const starships = useFetchList(data.starships);
	const vehicles = useFetchList(data.vehicles);
	const species = useFetchList(data.species);
	return (<>
		<h2>{data.title}</h2>
		<p>Diretor: <span>{data.director}</span></p>
		<p>Produtor: <span>{data.producer}</span></p>
		<p>Data de lançamento: <span>{data.release_date.split('-').reverse().join('/')}</span></p>
		<p>Texto de abertura: <span>{data.opening_crawl}</span></p>
		<p>Personagens: <span>{characters || '(...)'}</span></p>
		<p>Planetas: <span>{planets || '(...)'}</span></p>
		<p>Naves: <span>{starships || '(...)'}</span></p>
		<p>Veículos: <span>{vehicles || '(...)'}</span></p>
		<p>Espécies: <span>{species || '(...)'}</span></p>
	</>);
}