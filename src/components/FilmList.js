import React, {useState, useEffect} from "react";
import styled from "styled-components"; 

import FilmElement from "./FilmElement";
import Spinner from "./Spinner";

const FilmList = (props) => {

const [films, setFilms] = useState([]);
const [loading, setLoading] = useState(false);
 
const API = "https://api.itv.uz/api/content/main/2/list?user=fcf1f555115022e5cceaf0d0293ee382";
//const token = "fcf1f555115022e5cceaf0d0293ee382";

useEffect(() => {
    setLoading(true);
    
    fetch(`https://cors-anywhere.herokuapp.com/${API}`, {
      method: "GET",
    })	
      .then((response) => response.json())
      .then((responseData) => {
        setFilms(responseData.data.movies);
        setLoading(false);
      });
}, []);

/*

useEffect(() => {
  setLoading(true);


let url = `https://api.itv.uz/api/content/main/2/list?user=fcf1f555115022e5cceaf0d0293ee382`;
//let token = JSON.parse( sessionStorage.getItem("Token") );
const token = "fcf1f555115022e5cceaf0d0293ee382";

let h = new Headers();
h.append('Authentication', `Bearer ${token}`);

  let req = new Request(url, {
                method: 'GET',
                mode: 'cors',
                headers: h
            });

            fetch(req)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
                })
                .catch(err => {
                    console.error(err.message);
                })

}, []);

*/

return (
	<List> 
	   {loading ? <Spinner/> : films.map(film => <FilmElement key={film.id} id={film.id} poster={film.files.poster_url} title={film.title} imageAlt={film.title}/>) }	
	</List>
 )
}

export default FilmList;

const List = styled.div`
 width: 85%;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 align-items: center;
 padding-top: 10px;
 box-sizing: border-box; 
`
