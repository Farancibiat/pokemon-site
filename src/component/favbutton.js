import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



export const FavButton = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle  variant="outline-orange" id="dropdown-basic">
                    Favoritos <span className="badge rounded-pill bg-orange text-light">{store.favorites.length}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {(store.favorites.length < 1) ? (<Dropdown.Item>Empty List</Dropdown.Item>) :
                        (store.favorites.map((pokemon, ind) => {

                            return (
                                <li key={ind}>
                                    <Dropdown.Item>
                                        <div className="row">
                                            <div className="col-6">
                                                    {pokemon.name.toUpperCase()}
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <span key={`${ind}`} onClick={() => actions.delFav(pokemon)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </span>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </li>
                            )
                        }))
                    }

                </Dropdown.Menu>
            </Dropdown>


        </>
    );
};