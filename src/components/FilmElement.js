import React from "react";
import styled from "styled-components"

const FilmElement = (props) => {
	return( 
		<Element> 
		<Poster> <img src={props.poster} alt={props.imageAlt} /> </Poster>
		<Title> {props.title} </Title>
		</Element>
	)
}


const Element = styled.div`
	width: 354px;
	height: 257px;
`

const Poster = styled.div`
	width: 100%;
	height: 230px;
`

const Title = styled.div`
	width: 100%;
	height: 27
`

export default FilmElement;