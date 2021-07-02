import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";



export const TypeDesign = (props) => {
    const { store } = useContext(Context);
    let url=props.url.split("/")
    let nameIndex=url[url.length-2]
    if(nameIndex==='100001')
    nameIndex=19
    if(nameIndex==='1000012')
    nameIndex=20
    return (
        <>
        <Button variant={props.type}>{store.esTypeNames[parseInt(nameIndex-1)]}</Button>

            


        </>
    );
};
export default TypeDesign;