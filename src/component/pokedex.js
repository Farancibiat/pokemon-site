import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PokeCard } from "./pokeCard";

import loaderGif from "../img/loader.gif";

export const Pokedex = () => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="container pt-3 ">
        {/* <h1 className="orange-text text-capitalize">Pokedex</h1>
        <div className="row flex-nowrap overflow-auto">
          {store['pokes'].length === 0 ? (
            <div className="mx-auto my-auto">
              <img src={loaderGif} alt="Loader Gif" />{" "}
              <p className="orange-text px-5">Loading...</p>
            </div>
          ) : (
            store['pokes'].map((item, index) => {
              return (
                <PokeCard
                  key={index}
                  pos={index}
                />
              );
            })
          )}
        </div> */}
      </div>
    </>
  );
};
export default Pokedex;
