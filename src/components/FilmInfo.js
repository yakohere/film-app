import React, {useState, useEffect, Fragment} from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import Spinner from "./Spinner";

const FilmInfo = props => {

const filmid = useParams().filmid;

const [film, setFilm] = useState([]);
const [details, setDetails] = useState([]); 
const [snapshots, setSnapshots] = useState([]); 
const [isLoading, setIsLoading] = useState(false);

const cors_helper = "https://cors-anywhere.herokuapp.com/";
const url = "https://api.itv.uz/api/content/main/2/show/";
const token="?user=fcf1f555115022e5cceaf0d0293ee382";
//const token = "fcf1f555115022e5cceaf0d0293ee382";

 
useEffect(() => {

	setIsLoading(true); 
	
		fetch(`${cors_helper}${url}${filmid}${token}`, {
		method: "GET",	
		})
		.then(res => res.json())
		.then(resdata => {
		setFilm(resdata.data.movie);
		setSnapshots(resdata.data.movie.files.snapshots);
		setDetails(resdata.data.movie.files);
		setIsLoading(false);
		}) 
}, [filmid]);
    

let content;

if(isLoading) {
 	content = <Spinner/>
} else {
 	content = (
 		<Container>
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
					 <div className="snapshots">  
						 {snapshots.map(snapshot => <img src={snapshot.snapshot_url}/> )}
					</div>
				</Info>
			</RightItems>
		</Container>
 		)
 }  
	return content
	}

export default FilmInfo;

const Container = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 900px) {
   	width: 100%;
   	flex-direction: column;
   	justify-content: center;
   	align-items: center;
  	} 
`

const LeftItems = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 900px) {
width: 90%; 
} 
`
const Title = styled.div`
font-size: 25px;
padding: 10px;
box-sizing: border-box;

`

const Poster = styled.div`
	img {
		width: 380px;
		@media screen and (max-width: 900px) {
			width: 300px;		
		}
	}
`

const RightItems = styled.div`	 
width: 50%;
display: flex;
flex-direction: column; 
align-items: center;
padding: 50px;
box-sizing: border-box;
justify-content: center;
align-items: center;
@media screen and (max-width: 900px) {
width: 90%;
padding: 0;
} 
`

const Info = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.description{
	text-align: center;
}
@media screen and (max-width: 900px) {
hr{
	width: 50%;
	color: grey;	
}
}


.snapshots{
	width: 100%; 
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	img{
		width: 200px;
		border: 2px solid white;
	}
} 
`
 