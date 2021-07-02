import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PokeCard } from "./pokeCard";
import pokeball from "../img/source.gif"
import HoumLogo from "../img/loader.gif";

export const FavPokedex = () => {
  const { store } = useContext(Context);
  
  return (
    <>
      <div className="container pt-3 ">
        <h1 className="orange-text text-center">Pokedex de Favoritos</h1>
        <div className="row justify-content-center d-flex mb-5">
          {store.favorites.length === 0? (
            <div className="text-center">
              <p className=" px-5 ">Vuelve al inicio y agrega pokemones a Favoritos</p>
              <img src={HoumLogo} alt="Loader Gif" width="200" />{" "}
            </div>
          ) : 
             store.favorites.map((pokemon, index) => {
               return <li key={index}><PokeCard key={index} info={pokemon}/></li>
             })
            }
        </div>
      </div>
    </>
  );
};
export default FavPokedex;
