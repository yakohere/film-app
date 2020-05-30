import React, {useState, useEffect, Fragment} from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import Spinner from "./Spinner";

const FilmInfo = props => {
const filmid = useParams().filmid;

const [film, setFilm] = useState([]);
const [details, setDetails] = useState([]);
const [videoHd, setVideoHd] = useState("");
const [loading, setLoading] = useState(false);

const CORSHELPER = "https://cors-anywhere.herokuapp.com/"
const API = "https://api.itv.uz/api/content/main/2/show/"

useEffect(() => {
	setLoading(true);
	fetch(CORSHELPER + API + filmid + "?user=fcf1f555115022e5cceaf0d0293ee382")
	.then((response) => response.json())
      .then((responseData) => {
        setFilm(responseData.data.movie);
        setDetails(responseData.data.movie.files);  
        setLoading(false);
       });
}, [filmid]);
 

 let content ;

 if(loading) {
 	content = <Spinner/>
 } else {
 	content = (
 		<Fragment>
			<LeftItems>
				<Title>{film.title}</Title>
				<Poster><img src={details.poster_url} /></Poster>
			</LeftItems>
			<RightItems>
				<Info>
					<div className="country">Mamlakat: {film.countries_str}</div>
					<div className="year">Yil: {film.year}</div>
					<div className="genre">Janr: {film.genres_str}</div>
					<hr />
					<div className="description">{film.description}</div>
					<div className="player">  
						 <ReactPlayer url={videoHd} playing={true} />
					</div>
				</Info>
			</RightItems>
		</Fragment>
 		)
 }  

	return (
		<Container>
			{content}
		</Container>
		)
	}

export default FilmInfo;

const Container = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between; 
`

const LeftItems = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.div`
font-size: 25px;
padding: 10px;
`

const Poster = styled.div`
	img {
		width: 380px;
	}
`

const RightItems = styled.div`	
width: 50%;
display: flex;
flex-direction: column; 
align-items: center;
padding: 50px;
box-sizing: border-box;
`

const Info = styled.div`

.description{
	text-align: center;
}

.player{
	padding-top: 50px;
	box-sizing: border-box;
}

`
 