import { useFetchList } from "../utils/useFetchList";
import { getValue } from "../utils/utils";

export default function PlanetInfo({ data }: { data: any }) {
	const residents = useFetchList(data.residents);
	const films = useFetchList(data.films, true);

	return (<>
		<h2>{data.name}</h2>
		<p>Diâmetro: <span>{getValue(data.diameter, 'km')}</span></p>
		<p>Período de rotação: <span>{getValue(data.rotation_period, ' horas')}</span></p>
		<p>Período orbital: <span>{getValue(data.diameter, ' dias')}</span></p>
		<p>Gravidade: <span>{data.gravity}</span></p>
		<p>População: <span>{getValue(data.population, '')}</span></p>
		<p>Clima: <span>{data.climate}</span></p>
		<p>Terreno: <span>{data.terrain}</span></p>
		<p>Área de água superficial: <span>{data.surface_water + (isNaN(Number(data.surface_water)) ? '' : '%')}</span></p>
		{data.residents.length > 0 && <p>Residentes: <span>{residents || '(...)'}</span></p>}
		{films && <p>Filmes: <span>{films || '(...)'}</span></p>}
	</>);
}