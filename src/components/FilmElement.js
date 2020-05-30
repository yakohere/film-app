import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";


const FilmElement = (props) => {
	return(
		<Link to={`/${props.id}`}>
			<Element > 
				<Title>{props.title}</Title>
				<Poster><img src={props.poster} alt={props.imageAlt} /></Poster>
			</Element>
		</Link>
	)
}


export default FilmElement;

const Element = styled.div`
	width: 250px;
	height: 380px;
	margin-bottom: 10px;
	
`	
 
const Poster = styled.div`
	width: 100%;
	height: 230px;
	img{
		width: 250px;
	}
`
const Title = styled.div`
	width: 100%;
	height: 27;
	text-decoration: none;
	color: black;
	font-size: 18px;
`