import React, {useState, useEffect, Fragment} from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import Spinner from "./Spinner";

const FilmInfo = props => {
const filmid = useParams().filmid;

const [film, setFilm] = useState([]);
const [details, setDetails] = useState([]); 
const [loading, setLoading] = useState(false);

//const CORSHELPER = "https://cors-anywhere.herokuapp.com/";

useEffect(() => {
	setLoading(true);


let url = `https://api.itv.uz/api/content/main/2/show/${filmid}`;
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
                    console.log(data[0]);
                })
                .catch(err => {
                    console.error(err.message);
                })
        

}, []);
  
let content;

if(loading) {
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
					<div className="player">  
						 <ReactPlayer url="#" playing muted config={{ 
						 	file: { 
						 		attributes: {
						 			autoPlay: true,
						 			muted: true
						 		}}}} />
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
	width: 80%;
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
`
 