import Image from "next/image";
import { useContext, useState } from "react";
import { SamplePokemons } from "~/utils/SamplePokemons";

const PokemonPicker = () => {
  const [pokemons, setPokemons] = useState(SamplePokemons);

  const user = {
    coins: 0,
  };

  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-4  p-1">
      {pokemons.length > 0
        ? pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className={`relative flex items-center justify-center rounded-md border-[2px] border-slate-800 bg-gradient-to-br from-gray-300 to-slate-100 p-1
              dark:from-slate-500 dark:to-gray-800
              `}
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className={`w-full max-w-[130px] ${
                  user.coins >= pokemon.cost
                    ? "blur-none"
                    : "blur-[3px] grayscale"
                }`}
              />
              {pokemon.cost > 10 && (
                <>
                  <img
                    src="https://i.ibb.co/yyYY8pJ/lock.png"
                    alt={pokemon.name}
                    className="absolute left-1/2 top-1/2   z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-black/30 p-10"
                  />
                  <span className="absolute right-0 top-0 z-10 rounded-full border-2 border-slate-400 bg-gradient-to-br from-yellow-200 to-amber-600 px-2 py-1 font-medium text-gray-600 dark:text-gray-700">
                    ${pokemon.cost}
                  </span>
                </>
              )}
            </div>
          ))
        : ""}
    </div>
  );
};

export default PokemonPicker;
