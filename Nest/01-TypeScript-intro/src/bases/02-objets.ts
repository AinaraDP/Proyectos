export const pokemonIds = [1, 20, 30, 34, 66];

interface Pokemon{
    id:number;
    name: string;
    age?: number | undefined;
}

export const bulbasaur: Pokemon = {

    id: 1,
    name: "Bulbasaur",
    
}

export const charmander: Pokemon ={
    id: 4,
    name: "Charmander"
}


export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasaur);

console.log(pokemons); 