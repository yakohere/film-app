import React, {useState, useEffect} from "react";
import styled from "styled-components"
import axios from "axios";

import FilmElement from "./FilmElement"

const FilmList = (props) => {
const [films, setFilms] = useState([])
const [loading, setLoading] = useState(false);

const token = "fcf1f555115022e5cceaf0d0293ee382"
const API = "https://api.itv.uz/api/content/main/2/list?user="

useState(() => {
	setLoading(true);

	/*fetch( API + token)
      .then((response) => response.json())
      .then((data) => {
        setFilms(data);
        setLoading(false);
      });
      */

     axios.get(API + token)
     	.then(response.data => data)
     	.then(data => setFilms(data))
     	setLoading(false)



},[])

return(
	<List>
		{films.map(film => <FilmElement id={film.id} poster={film.files.poster_url} title={film.title}/>)}
	</List>
	)
}

export default FilmList;

const List = styled.div`
 width: 80%;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 align-items: center;


`
