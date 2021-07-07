import React, {useContext} from "react";
import { Context } from "../store/appContext";
import {Form} from 'react-bootstrap'

export const SearchBar = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="jumbotron orange-text container shadow mt-3">
        <h1>Búsqueda Pókemon</h1>
        <div>{store.generation}</div>
        <p>Elige que generación vamos a investigar:</p>
        <Form.Control
        as="select"
        onChange={e=>actions.changeGen(e)}
        custom
        >
            <option key={10000} value={0}>Elige una Generación</option>
            {store.generations.map((gen,index)=>{
          return(          
          <option key={index} value={gen.url}>Generación {index+1}</option>
          )
      })
      }
      </Form.Control>
      {store.downloadCompleted?
      <Form.Group className="my-3">
      <Form.Control type="text" placeholder="Ingresa un nombre" onChange={e=>actions.setSearch(e.target.value)}/>
      <Form.Text>Busca un Pókemon por su nombre</Form.Text>
      </Form.Group>:""}
      </div>
    </>
  );
};

export default SearchBar;
