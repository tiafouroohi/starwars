import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Router} from '@reach/router';
import {Link} from '@reach/router';

const Person = (props) => {
    const [character, setCharacter] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect( () => {
        fetchData();     
    }, [])

    const fetchData = e => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {
            let jsonResponse = response.data;
            setCharacter({
                name: jsonResponse.name,
                height: jsonResponse.height,
                mass: jsonResponse.mass,
                hairColor: jsonResponse.hair_color,
                skinColor: jsonResponse.skin_color,
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
            <h1>Name: {character.name}</h1>
            <ul>
                <li>Mass: {character.mass}</li>
                <li>Height: {character.height}</li>
                <li>Hair Color: {character.hairColor}</li>
                <li>Skin Color: {character.skinColor}</li>
            </ul>
            </>
            :
            ""
        }
        </>
    )
}

export default Person;
