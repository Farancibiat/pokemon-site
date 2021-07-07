import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { PokeCard } from "./pokeCard";
import HoumLogo from "../img/loader.gif";

export const FavPokedex = () => {
  const { store, actions } = useContext(Context);
  
useEffect(()=>actions.resetActivePokemons(),[])

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
               return <li className='mx-3 my-2' key={index}><PokeCard key={index} info={pokemon}/></li>
             })
            }
        </div>
      </div>
    </>
  );
};
export default FavPokedex;
