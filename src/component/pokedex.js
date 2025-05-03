import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PokeCard } from "./pokeCard";
import pokeball from "../img/source.gif";
import pokedex from "../img/pokedex.png";

export const Pokedex = () => {
  const { store } = useContext(Context);

  return (
    <>
      <div className="container pt-3 px-0 ">
        <h1 className="orange-text text-center">Pokedex</h1>
        <div className="row mx-auto justify-content-center mb-5">
          {store.activePokemons.length === 0 ? (
            <div className="text-center">
              <p className=" px-auto ">Selecciona generación para empezar...</p>
              <img src={pokedex} alt="Loader Gif" width="200" />{" "}
            </div>
          ) : store.downloadCompleted ? (
            <div className="row">
              {store.activePokemons
                .filter((poke) => {
                  if (store.search === "") return poke;
                  else if (poke.name.includes(store.search.toLowerCase()))
                    return poke;
                  return null;
                })
                .map((pokemon, index) => {
                  return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={index}>
                      <PokeCard key={`card-${index}`} info={pokemon} />
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="text-center my-auto mx-auto">
              <img src={pokeball} alt="Pokeball" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Pokedex;
