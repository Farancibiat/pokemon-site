import React, { useContext, useState } from "react";

import { Context } from "../store/appContext";
import {
  Card,
  Button,
  Carousel,
  Modal,
  Container,
  Row,
  Col,
  Form,
  Table,
} from "react-bootstrap";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeDesign } from "./typeDesign";

export const PokeCard = (props) => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="PokeCard mx-3 my-3" style={{ width: "180px" }}>
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
        <Container className="px-2 wrap">
          <Row className="mx-0">
            <Col>
              <div className="text-muted">N°: {props.info.id}</div>
            </Col>
          </Row>
          <Row className="mx-0">
            <Col>
              <Card.Title className="orange-text mb-0">
                {props.info.name.charAt(0).toUpperCase() +
                  props.info.name.slice(1)}
              </Card.Title>
            </Col>
          </Row>
          <Row className="my-1 mx-0">
            <Col>
              <div className="text-muted">Tipo:</div>
            </Col>
          </Row>
          <Row className="mx-0 text-center">
            {props.info.types.map((type, index) => {
              return (
                <Col key={index} sm={6} className="px-0">
                  <TypeDesign
                    key={`k${index}`}
                    type={type.type.name}
                    url={type.type.url}
                  />
                </Col>
              );
            })}
          </Row>
          <Row className="my-3 mx-0 text-center">
            <Col className="py-1" sm={6}>
              <Button variant="outline-orange" onClick={handleShow}>
                Detalles
              </Button>
            </Col>

            <Col sm={6} className="py-1">
              {window.location.href.split("/")[
                window.location.href.split("/").length - 1
              ] === "favoritos" ? (
                <></>
              ) : (
                <Button
                  variant="outline-orange"
                  onClick={() => actions.addFav(props.info)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Card>

      {/* This is the Modal View of each Card */}

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="orange-text">
            {props.info.name.charAt(0).toUpperCase() + props.info.name.slice(1)}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel interval={null}>
            {Object.keys(store.sprites).map((spriteName, index) => {
              if (!props.info.sprites[spriteName]) {
                return "";
              } else {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-50 mx-auto"
                      src={props.info.sprites[spriteName]}
                      alt="Pokemon"
                    />
                    <Carousel.Caption>
                      <h5 className="orange-text bg-caption">
                        {store.sprites[spriteName]}
                      </h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              }
            })}
          </Carousel>
          <Row>
            <Col className="text-center">
              <div className="text-muted">
                "
                {
                  [
                    ...props.info.flavor_text_entries.filter((texts, index) => {
                      return !texts.language.name.localeCompare("es");
                    }),
                    "",
                  ][0].flavor_text
                }
                "
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="d-flex">
              <h3 className="mr-3">Tipo:</h3>
              {props.info.types.map((type, index) => {
                return (
                  <TypeDesign
                    key={index}
                    type={type.type.name}
                    url={type.type.url}
                  />
                );
              })}
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Table className="text-center" striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>N° Pokedéx</th>
                    <th>Es bebé</th>
                    <th>Es Legendario</th>
                    <th>Es Mítico</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{props.info.id}</td>
                    <td>{props.info.is_baby ? "Si" : "No"}</td>
                    <td>{props.info.is_legendary ? "Si" : "No"}</td>
                    <td>{props.info.is_mythical ? "Si" : "No"}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>
                  Revisa los movimientos que puede aprender este pokemón
                </Form.Label>
                <Form.Control as="select" multiple>
                  {props.info.moves
                    .sort((a, b) => {
                      if (a.move.name.localeCompare(b.move.name) < 0) return -1;
                      if (a.move.name.localeCompare(b.move.name) > 0) return 1;
                      if (a.move.name.localeCompare(b.move.name) === 0)
                        return 0;
                    })
                    .map((move, index) => {
                      return (
                        <option key={index}>
                          {move.move.name.charAt(0).toUpperCase() +
                            move.move.name.slice(1)}
                        </option>
                      );
                    })}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-orange" onClick={handleClose}>
            Cerrar
          </Button>
          {window.location.href.split("/")[
            window.location.href.split("/").length - 1
          ] === "favoritos" ? (
            <></>
          ) : (
            <Button
              variant="outline-orange"
              onClick={() => actions.addFav(props.info)}
            >
              {
                window.location.href.split("/")[
                  window.location.href.split("/").length - 1
                ]
              }
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PokeCard;
