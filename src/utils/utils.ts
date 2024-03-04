export const RESOURCES: { name: string, displayName: string }[] = [
	{ name: 'films', displayName: 'Filmes' },
	{ name: 'people', displayName: 'Pessoas' },
	{ name: 'planets', displayName: 'Planetas' },
	{ name: 'species', displayName: 'Espécies' },
	{ name: 'starships', displayName: 'Naves' },
	{ name: 'vehicles', displayName: 'Veículos' }
];

export const API_BASE = 'https://swapi.dev/api/';

export function getValue(value: string, suffix: string): string {
	return isNaN(Number(value)) ? value : `${Number(value).toLocaleString('pt-BR')}${suffix}`;
}