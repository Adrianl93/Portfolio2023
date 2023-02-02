import React, { useEffect, useState } from "react";
// import Carousel from "react-elastic-carousel";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "@fontsource/dotgothic16";
import "@fontsource/englebert";
import htmlIcon from "../media/htmlIcon.png";
import cssIcon from "../media/cssIcon.png";
import javascriptIcon from "../media/javascriptIcon.png";

import sqlIcon from "../media/sqlIcon.png"
import postgreIcon from "../media/postgreIcon.png";
import nodeJSIcon from "../media/nodeJsIcon2.png";

import bootstrapIcon from "../media/bootstrapIcon.png";
import reactIcon from "../media/reactIcon.png";
import reduxIcon from "../media/reduxIcon.png";

import photoshopIcon from "../media/photoshopIcon.png";
import lightroomIcon from "../media/lightroomIcon.png";

export default function Section2() {

    
    return (
    <SkillsMain>

        <LeftSideSkills>
            <TitleText left={"4%"}>Habilidades Técnicas</TitleText>
            <TitleText left={"4%"} top={"13%"} fontSize={"40px"}  color={"#7B98BD"}>Lenguajes de Programación</TitleText>
            <SkillsContainer top={"32%"}>
                <SkillsIcon src={htmlIcon} height={"100%"} width={"15%"} />
                <SkillsIcon src={cssIcon} height={"100%"} width={"15%"}/>
                <SkillsIcon src={javascriptIcon} height={"100%"} width={"15%"}/>
            </SkillsContainer>

            <TitleText left={"4%"} top={"40%"} fontSize={"40px"}  color={"#7B98BD"}>Frameworks y Tecnologías</TitleText>
            <SkillsContainer top={"58%"}>
                <SkillsIcon src={nodeJSIcon}  width={"27%"} height={"90%"} />
                <SkillsIcon src={reactIcon}  width={"15%"} height={"93%"}/>
                <SkillsIcon src={reduxIcon} width={"20%"} height={"95%"}  paddingTop={"0px"}/>


            </SkillsContainer>
            <SkillsContainer top={"70%"}>
                <SkillsIcon src={sqlIcon}  width={"20%"} height={"90%"}/>
                <SkillsIcon src={bootstrapIcon}  width={"15%"} height={"90%"}/>
                <SkillsIcon src={postgreIcon}  width={"15%"} height={"90%"}/>

            </SkillsContainer>
            <TitleText left={"4%"} top={"73%"} fontSize={"40px"}  color={"#7B98BD"}>Software y herramientas</TitleText>
            <SkillsContainer top={"88%"}>
                <SkillsIcon src={lightroomIcon} width={"15%"} height={"95%"}/>
                <SkillsIcon src={photoshopIcon} width={"15%"} height={"95%"}/>

            </SkillsContainer>
        </LeftSideSkills>


        <RightSideSkills>
            <TitleText left={"53.5%"} color={"#39446C"}>Habilidades Blandas</TitleText>

            <SoftSkillsContainer>
                <SkillsText bColor={"#7B98BD"}>Adaptabilidad</SkillsText>
                <SkillsText bColor={"#DB6260"}>Pensamiento crítico</SkillsText>
                <SkillsText bColor={"#31A8FF"}>Autodidacta</SkillsText>
                <SkillsText bColor={"#31A8FF"}>Determinación</SkillsText>
                <SkillsText bColor={"#7B98BD"}>Negociación</SkillsText>
                <SkillsText bColor={"#DB6260"}>Análisis de problemas</SkillsText>
                <SkillsText bColor={"#DB6260"}>Trabajo en equipo</SkillsText>
                <SkillsText bColor={"#31A8FF"}>Iniciativa</SkillsText>
                <SkillsText bColor={"#7B98BD"}>Creatividad</SkillsText>
                <SkillsText bColor={"#7B98BD"}>Aprendizaje Ágil</SkillsText>
                <SkillsText bColor={"#DB6260"}>Aprendizaje constante</SkillsText>
                <SkillsText bColor={"#31A8FF"}>Empatía</SkillsText>
                <SkillsText bColor={"#31A8FF"}>Sociabilidad</SkillsText>
                <SkillsText bColor={"#7B98BD"}>Curiosidad</SkillsText>
                <SkillsText bColor={"#DB6260"}>Oratoria</SkillsText>


            </SoftSkillsContainer>
        </RightSideSkills>

    </SkillsMain>
    
    );
};


export const SkillsMain=styled.div`
display:flex;
flex-direction: row;
height: 100vh;
width: 93vw;
padding: 0px;
margin: 0px;
`
// LEFT SIDE

export const LeftSideSkills=styled.div`
display:flex;
flex-direction: row;

height: 100%;
width:50%;
background-color: #39446C;
padding: 0px;
margin: 0px;
`
export const SkillsContainer=styled.div`
display:flex;
position: absolute;
top: ${props => props.top || "30%"};
left: ${props => props.left || "5%"};
padding:0px;
margin: 0px;

height: ${props => props.height || "10%"};
width: ${props => props.width || "30%"};


grid-template-columns: repeat(3, minmax(0px,100px));
gap:0px;

align-items: flex-end;
justify-content: space-around;

`
export const SkillsIcon=styled.img`
height: ${props => props.height || "100%"};
width: ${props => props.width || "50%"};
margin-top:${props => props.marginTop || "0px"};
padding-top:${props => props.paddingTop || "0px"};

`


//RIGHT SIDE
export const RightSideSkills=styled.div`
display:flex;
flex-direction: row;

height: 100%;
width:50%;
background-color:#FFDB99 ;
padding: 0px;
margin: 0px;
`


export const TitleText=styled.h1`
position: absolute;
width: max-content;
height: 90px;
top: ${props => props.top || "-4%"};
left: ${props => props.left || "30%"};


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


`
export const SoftSkillsContainer=styled.div`
display:grid;
position: relative;
height: 400px;
width: 200px;
top:20%;
left:11%;
grid-template-columns: repeat(3, minmax(0px,225px));
grid-auto-rows: minmax(100px, 125px);
gap: 0px;
flex-grow: 1;
padding: 0px;
margin:0px;


`
export const SkillsText=styled.p`

width: 80%;
height: 35%;
border-radius: 15px;
border:1.5px solid black;
text-align:center;
align-items:center;
justify-content: center;

font-family: 'Englebert';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 29px;
/* or 145% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.03em;
text-transform: capitalize;
background-color: ${props => props.bColor || "#FFDB99"};

color: #0A0A0A;

`