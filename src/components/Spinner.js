import React from "react"
import styled from "styled-components";

const Spinner = () => {
	return (
		<SpinnerContainer>
		<div className="loadingio-spinner-ellipsis-i5vqj23m9eo"><div className="ldio-x13sovfcljb">
    <div></div><div></div><div></div><div></div><div></div>
    </div></div>
</SpinnerContainer>
)
}


export default Spinner;


const SpinnerContainer = styled.div`
 

@keyframes ldio-x13sovfcljb {
   0% { transform: translate(6px,40px) scale(0); }
  25% { transform: translate(6px,40px) scale(0); }
  50% { transform: translate(6px,40px) scale(1); }
  75% { transform: translate(40px,40px) scale(1); }
 100% { transform: translate(74px,40px) scale(1); }
}
@keyframes ldio-x13sovfcljb-r {
   0% { transform: translate(74px,40px) scale(1): }
 100% { transform: translate(74px,40px) scale(0); }
}
@keyframes ldio-x13sovfcljb-c {
   0% { background: #93dbe9 }
  25% { background: #3b4368 }
  50% { background: #5e6fa3 }
  75% { background: #689cc5 }
 100% { background: #93dbe9 }
}
.ldio-x13sovfcljb div {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(40px,40px) scale(1);
  background: #93dbe9;
  animation: ldio-x13sovfcljb 1s infinite cubic-bezier(0,0.5,0.5,1);
}
.ldio-x13sovfcljb div:nth-child(1) {
  background: #689cc5;
  transform: translate(74px,40px) scale(1);
  animation: ldio-x13sovfcljb-r 0.25s infinite cubic-bezier(0,0.5,0.5,1), ldio-x13sovfcljb-c 1s infinite step-start;
}.ldio-x13sovfcljb div:nth-child(2) {
  animation-delay: -0.25s;
  background: #93dbe9;
}.ldio-x13sovfcljb div:nth-child(3) {
  animation-delay: -0.5s;
  background: #689cc5;
}.ldio-x13sovfcljb div:nth-child(4) {
  animation-delay: -0.75s;
  background: #5e6fa3;
}.ldio-x13sovfcljb div:nth-child(5) {
  animation-delay: -1s;
  background: #3b4368;
}
.loadingio-spinner-ellipsis-i5vqj23m9eo {
  width: 64px;
  height: 64px;
  display: inline-block;
  overflow: hidden; 
}
.ldio-x13sovfcljb {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.64);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-x13sovfcljb div { box-sizing: content-box; }

`






