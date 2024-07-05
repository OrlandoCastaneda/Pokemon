import {Container, Row, Col, InputGroupText, Input, InputGroup} from "reactstrap"
import axios from "axios"
import { useState, useEffect } from "react"
import PokeCard from "../Components/PokeCard"


const index = () => {
    const [pokemones, setPokemones] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);
    useEffect(()=>{
        getPokemones(offset);
    },[]);
    const getPokemones = async(o)=>{
        const urlApi = 'https://pokeapi.co/api/v2/pokemon?limit='+limit+'&offset='+offset;
        axios.get(urlApi).then(async(response)=>{
            const respuesta = response.data
            setPokemones(respuesta.results)
    }) 
    } 
  return (
    <Container className="shadow bg-dark mt-3 rounded">
        <Row>
            <Col>
                <InputGroup className="mb-3 mt-3 shadow">
                    <InputGroupText>
                        <i className="fa-solid fa-search"></i>
                    </InputGroupText>
                    <Input placeholder="Buscar Pokemon"></Input>

                </InputGroup>
            </Col>
        </Row>
        <Row className="mt-3">
            {pokemones.map((pok,i)=>(
                <PokeCard poke={pok} key={i}></PokeCard>
            ))}
        </Row>
    </Container> 
  )
}

export default index