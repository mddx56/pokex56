import { pokeApi } from '../config/api/pokeApi';
import { PokeApiPaginateResponse } from '../infrastructure/interfaces/pokeapi.interface';

export const getPokemonNamesWithId = async () => {
    const url = `pokemon?limit=1000`;
    const { data } = await pokeApi.get<PokeApiPaginateResponse>(url);

    return data.results.map((info) => ({
        id: Number(info.url.split('/')[6]),
        name: info.name,
    }));

};


