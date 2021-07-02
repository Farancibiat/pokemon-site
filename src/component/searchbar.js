import React, {useContext} from "react";
import { Context } from "../store/appContext";
import {Form} from 'react-bootstrap'

export const SearchBar = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container py-5 bg-warning">
        <h1>Búsqueda Pókemon</h1>
        <div>{store.generation}</div>
        <p>Elige que generación vamos a investigar:</p>
        <Form.Control
        as="select"
        onChange={e=>actions.changeGen(e)}
        custom
        >
            <option value='0'>Elige una Generación</option>
            {store.generations.map((gen,index)=>{
          return(          
          <option value={gen.url}>Generación {index+1}</option>
          )
      })
      }
      </Form.Control>
{/*         
        <input type="text"></input> */}
      </div>
    </>
  );
};

export default SearchBar;
