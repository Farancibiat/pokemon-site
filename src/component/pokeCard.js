import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Card, Button, Carousel } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";
import { TypeDesign } from "./typeDesign";

export const PokeCard = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Card
        className="PokeCard mx-3 my-3"
        style={{ width: "180px" }}
      >
        <Card.Header className="py-0 px-0">
          <Carousel interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.info["sprites"]["front_default"]}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.info.sprites.back_default}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </Card.Header>
            <div clasName="container">
          <div className="row">
            <div className="col-12">
              <div>N°: {props.info.id}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Card.Title className="orange-text">
                {props.info.name.charAt(0).toUpperCase() +
                  props.info.name.slice(1)}
              </Card.Title>
            </div>
          </div>
          <div className="row mx-0 wrap">
            <div className="col-12 col-sm-3 px-0">
              <div className="text-muted">Tipo:</div>
            </div>

            {props.info.types.map((type) => {
              return (
                <div className="col-12 col-sm-4 px-0">
                  <TypeDesign type={type.type.name} url={type.type.url} />
                </div>
              );
            })}
          </div>
          <div className="row my-2 ">
            <div className="col-12 col-sm-6 text-center ">
              {/* <LinkContainer to={`/character/${props.position}`}> */}
              <Button className="btn-orange " variant="outline-light">
                Detalles
              </Button>
              {/* </LinkContainer> */}
            </div>

            <div className="col-12 col-sm-6 text-center">
              <Button
                className="btn-orange"
                variant="outline-light"
                onClick={() => actions.addFav(props.info)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </Button>
            </div>
          </div>
          </div>
      </Card>
    </>
  );
};
export default PokeCard;
