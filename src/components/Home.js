import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

 
const Home = (props) => {
    const[criteria, setCriteria] = useState([]);
    const[dataFetched, setDataFetched] = useState(false);
    const [variableName, setVariableName] = useState("");
    const [id, setId] = useState("");

    const handleSubmit = e => {
        navigate(`/${variableName}/${id}`); 
      }
      
    useEffect ( () => {
      axios.get("https://swapi.dev/api/")
      .then(response => {
        setCriteria (
          Object.keys(response.data)
        )
        setDataFetched(true);
      })
      .catch(err => console.log(err));
      }, [  ])
    
      return (
        <>
        <h1>Welcome to the Dark Side...</h1>
    <form onSubmit = {handleSubmit} >
      <label for>Search Star Wars Index of:</label>
      <select onChange = { e => setVariableName(e.target.value)}>
        <option>Select</option>
        {
        criteria.map( (item, i) => {
         return <option key = {i} value = {item} >{item}</option>
        })
        }
      </select>
      <label>And Their Index:</label>
        <input type = "text" onChange = { e => setId(e.target.value)} ></input>
        <input type = "submit" value = "Search!"></input>  
    </form>
        </>
    )
      }

export default Home;
