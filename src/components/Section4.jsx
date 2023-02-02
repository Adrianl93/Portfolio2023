import React, { useEffect, useState } from "react";
// import Carousel from "react-elastic-carousel";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "@fontsource/dotgothic16";
import "@fontsource/englebert";

export default function Section4() {

    
    return (
    <EducationContainer>
        <TitleEducationText>Education</TitleEducationText>
        <EducationMainContainer>
            <LeftEducationContainer>
                <TitleEducationText fontSize={"40px"} left={"3%"} top={"15%"}>Soy Henry bootcamp</TitleEducationText>
                    <EducationDescription top={"27%"}>Fullstack developer (js, react, redux, postgre, Nodejs). 2023</EducationDescription>
                    <EducationDescription top={"32%"} color={"#EBECF0"}>700hs de cursado teórico práctico</EducationDescription>
                <TitleEducationText fontSize={"40px"} left={"3%"} top={"40%"}>Facultad de Psicología</TitleEducationText>
                    <EducationDescription top={"52%"}>Licenciatura en Psicología. 2023 </EducationDescription>
                    <EducationDescription top={"57%"} color={"#EBECF0"}>Cursado de 5 años y tesis sobre “estigma en salud mental”</EducationDescription>
                <TitleEducationText fontSize={"40px"} left={"3%"} top={"65%"}>Facultad de Arte y diseño</TitleEducationText>
                    <EducationDescription top={"77%"}>Tecnicatura superior en Fotografía. 2020</EducationDescription>
                    <EducationDescription top={"82%"} color={"#EBECF0"}>Cursado de 3 años y proyecto final sobre “la depresión”.</EducationDescription>
            </LeftEducationContainer>

            <RightEducationContainer>
                <TitleEducationText fontSize={"40px"} left={"53%"} top={"15%"} color={"#DB6260"}>Educacion adicional</TitleEducationText>
                <EducationDescription left={"50%"} top={"35%"}>Fundación Telefónica . Introducción al diseño de videojuegos. 2023.</EducationDescription>
                <EducationDescription left={"50%"} top={"53%"}>UBA IALAB. Introducción / Formación en Datos e Inteligencia Artificial. 2023.</EducationDescription>
                <EducationDescription left={"50%"} top={"68%"}>Ing. A. Mercau. Bachillerato con formación técnica(electromecánica). 2010.</EducationDescription>
            </RightEducationContainer>


        </EducationMainContainer>
    </EducationContainer>
    
    );
};


export const EducationContainer=styled.div`
display: flex;
padding: 0px;
margin: 0px;
justify-content: center;
height: 100vh;
width: 100vw;

`

export const TitleEducationText=styled.h1`
position: absolute;
width: max-content;
height: 90px;
top: ${props=> props.top || "-4%"};
left: ${props=> props.left || ""};




font-family: 'DotGothic16';
font-style: normal;
font-weight: 400;
font-size:${props => props.fontSize || "60px"};
line-height: 0%;
/* or 0px */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.001em;
color: ${props => props.color || "#FFDB99"};
margin-left:2%;
text-transform: uppercase;

`
export const EducationMainContainer=styled.div`
display:flex;
flex-direction:row;
justify-content: space-around;
padding: 0px;
margin: 0px;
`


//LEFT
export const LeftEducationContainer=styled.div`
`

export const EducationDescription=styled.p`
position: absolute;
top: ${props => props.top || "30%"};
left: ${props => props.left || "0%"};
width: 90%;
font-family: 'Englebert';
font-style: normal;
font-weight: 400;

line-height: 29px;
/* or 145% */

display: flex;
align-items: center;
text-align: justify;
letter-spacing: 0.03em;
font-size:${props => props.fontSize || "20px"};
margin-left:5%;
color: ${props => props.color || "#31A8FF"};

`


//RIGHT

export const RightEducationContainer=styled.div`
`