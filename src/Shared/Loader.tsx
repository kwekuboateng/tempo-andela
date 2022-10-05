import * as React from 'react';
import styled, { keyframes } from 'styled-components'

// :root {
//     --main-color: #ecf0f1;
//     --point-color: #555;
//     --size: 5px;
//   }

const Load = styled.div`
    background-color: #ecf0f1;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0; left: 0;
    display: flex;
    align-items: center;
    align-content: center; 
    justify-content: center;  
    z-index: 100000;
`

const preloader = keyframes`
    100% { transform: scale(2); }   
`
  
const LoadElement = styled.span`
    border-radius: 100%;
    border: 5px solid #555;
    margin: calc(5px * 2);

    &:nth-child(1) {
        animation: ${preloader} .6s ease-in-out alternate infinite;
    }
    &:nth-child(2) {
        animation: ${preloader} .6s ease-in-out alternate .2s infinite;
    }
    &:nth-child(3) {
        animation: ${preloader} .6s ease-in-out alternate .4s infinite;
    }
`

export default function Loader () {
  return (
    <Load>
      <LoadElement />
      <LoadElement />
      <LoadElement />
    </Load>
  );
}
