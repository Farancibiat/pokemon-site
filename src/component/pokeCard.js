import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Card, Button, Carousel, Modal, Container, Row, Col, Table} from "react-bootstrap";
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
            {props.info.types.map((type) => {
              return (
                <Col sm={6} className="px-0">
                  <TypeDesign type={type.type.name} url={type.type.url} />
                </Col>
              );
            })}
          </Row>
          <Row className="my-3 mx-0">
            <Col sm={6}>
              <Button variant="outline-orange" onClick={handleShow}>
                Detalles
              </Button>
            </Col>

            <Col sm={6} className="text-center">
            {window.location.href.split("/")[window.location.href.split("/").length-1]==='favoritos'?<></>:
              <Button
                variant="outline-orange"
                onClick={() => actions.addFav(props.info)}
              >
                <FontAwesomeIcon icon={faHeart} />
              </Button>
}
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
            {Object.keys(store.sprites).map((spriteName) => {
              if (!props.info.sprites[spriteName]){
                return none;
              } else {
                return (
                  <Carousel.Item >
                    <img
                      className="d-block w-50 mx-auto"
                      src={props.info.sprites[spriteName]}
                      alt="Pokemon"
                    />
                    <Carousel.Caption>
                    <h5 className="orange-text bg-caption">{store.sprites[spriteName]}</h5>
                  </Carousel.Caption>
                  </Carousel.Item>
                  
                );
              }
            })}
          </Carousel>
          <Row><Col className="text-center"><div className="text-muted">"{props.info.flavor_text_entries.filter((texts=>
            !texts.language.name.localeCompare('es')))[0].flavor_text}"</div></Col></Row>
          <Row className="my-3">
            <Col className="d-flex">
            <h3 className="mr-3">Tipo:</h3>
          {props.info.types.map((type) => {
              return (
                  <TypeDesign type={type.type.name} url={type.type.url} />
                
              );
            })}
            </Col>
            </Row>
            <Row>
              <Table></Table>
            {props.info.moves.map((move, index)=>{
             
            })}
            </Row>
          <h1>text1</h1>
          <h1>text1</h1>
          <h1>text1</h1>
          <h1>text1</h1>
          
          <h1>text1</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-orange" onClick={handleClose}>
            Cerrar
          </Button>
          {window.location.href.split("/")[window.location.href.split("/").length-1]==='favoritos'?<></>:
          <Button
            variant="outline-orange"
            onClick={() => actions.addFav(props.info)}
          >{window.location.href.split("/")[window.location.href.split("/").length-1]}
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          }
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PokeCard;
