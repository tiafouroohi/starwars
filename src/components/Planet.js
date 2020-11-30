import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Router} from '@reach/router';
import {Link} from '@reach/router';

const Planet = (props) => {
    const[planet, setPlanet] = useState([]);
    const[dataFetched, setDataFetched] = useState(false);

    useEffect( () => {
        fetchData();
    }, [])

    const fetchData = e => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response => {
            let jsonResponse = response.data;
            setPlanet ({
                name: jsonResponse.name,
                climate: jsonResponse.climate,
                terrain: jsonResponse.terrain,
                surfaceWater: jsonResponse.surface_water,
                population: jsonResponse.population
            })
            setDataFetched(true);
        })
        .catch(err => (console.log(err)));
    }
    const {id} = props;
    return (
        <>
        <Link to = "/">Home</Link>
        {
            dataFetched ?
            <>
            <h1>Name: {planet.name} </h1>
            <ul>
                <li>Climate: {planet.climate}</li>
                <li>Terrain: {planet.terrain}</li>
                <li>Surface Water: {planet.surfaceWater}</li>
                <li>Population: {planet.population}</li>
            </ul>
            </>
            :
            ""
        }    
        </>
    )
}

export default Planet;
