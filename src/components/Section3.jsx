import React, { useEffect, useState } from "react";
// import Carousel from "react-elastic-carousel";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "@fontsource/dotgothic16";
import "@fontsource/englebert";
import pokemonProject from "../media/pokemonProject.png";
import bookExplorer from "../media/bookexplorer.png";
import htmlIcon from "../media/htmlIcon.png";
import cssIcon from "../media/cssIcon.png";
import javascriptIcon from "../media/javascriptIcon.png";
import postgreIcon from "../media/PostgreIcon3.png";
import bootstrapIcon from "../media/bootstrapIcon2.png";
import reactIcon from "../media/reactIcon2.png";
import reduxIcon from "../media/reduxIcon.png";
import github from "../media/github.svg"

export default function Section3() {

    
    return (
    <ProjectsContainer>
        <TitleProjectsText>Proyectos</TitleProjectsText>
        <Rectangle>
            <ProjectContainer>
                <a href="https://pokemon-pi-client.vercel.app/" target="_blank"><ProjectImg src={pokemonProject}></ProjectImg></a>
                <TitleProjectsText fontSize={"25x"} top={"42%"} color={"#31A8FF"}>Pokémon Project</TitleProjectsText>
                <a href="https://github.com/Adrianl93/Pokemon_PI" target="_blank"><GitHubIconImg src={github} right={"56%"}/></a>
                <ProjectDescription>App web desarrollada como proyecto individual de SoyHenry.</ProjectDescription>
                <TechContainer>
                    <TechsIcon src={htmlIcon}/>
                    <TechsIcon src={cssIcon}/>
                    <TechsIcon src={javascriptIcon}/>
                    <TechsIcon src={reactIcon}/>
                    <TechsIcon src={postgreIcon}/>
                    

                </TechContainer>
            </ProjectContainer>

            <ProjectContainer>
                <a href="https://pf-henry-book-store-client.vercel.app/" target="_blank"><ProjectImg src={bookExplorer}></ProjectImg></a>
                <TitleProjectsText fontSize={"25x"} top={"42%"} color={"#31A8FF"}>Book Explorer</TitleProjectsText>
                <a href="https://github.com/Adrianl93/PF-HenryBookStore-Client" target="_blank"><GitHubIconImg src={github}/></a>
                <ProjectDescription left={"52%"}>App web desarrollada en grupo como proyecto final de SoyHenry.</ProjectDescription>
                <TechContainer >
                    <TechsIcon src={htmlIcon}/>
                    <TechsIcon src={cssIcon}/>
                    <TechsIcon src={javascriptIcon}/>
                    <TechsIcon src={reactIcon}/>
                    <TechsIcon src={postgreIcon}/>
                    <TechsIcon src={bootstrapIcon}/>

                </TechContainer>
            </ProjectContainer>
        </Rectangle>
    </ProjectsContainer>
    
    );
};

export const ProjectsContainer=styled.div`
display: flex;
padding: 0px;
margin: 0px;
justify-content: center;
height: 100vh;
width: 100vw;

`


export const TitleProjectsText=styled.h1`
position: absolute;
width: max-content;
height: 90px;
top: ${props=> props.top || "-4%"};




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
color: ${props => props.color || "#7B98BD"};
margin-left:2%;

`

export const Rectangle=styled.div`
position: absolute;
width: 55%;
height: 70%;
display:flex;
top: 25%;

background: #39446C;
border-radius: 30px;
border: 1.5px solid black;
box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
align-items: center;
justify-content: space-around;

&:hover{
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
}
`

export const ProjectContainer=styled.div`


height: 90%;
width: 40%;
background: #D9D9D9;
border-radius: 34px;
border:3px solid black;
`

export const ProjectImg=styled.img`
margin-top: 0px;
height: 50%;
width: 100%;
border-radius: 30px;

&:hover{
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    margin-top: -3px;
}
`

export const ProjectDescription=styled.p`
position: absolute;
top: ${props => props.top || "58%"};
left: ${props => props.left || "2%"};
width: 35%;
font-family: 'Englebert';
font-style: normal;
font-weight: 400;

line-height: 29px;
/* or 145% */

display: flex;
align-items: center;
text-align: justify;
letter-spacing: 0.01em;
font-size:${props => props.fontSize || "18px"};
margin-left:5%;
color: ${props => props.color || "#DB6260"};

`
export const TechContainer=styled.div`
display:flex;
position: absolute;
top: ${props => props.top || "80%"};
/* left: ${props => props.left || "5%"}; */
padding:0px;
margin: 0px;

height: ${props => props.height || "10%"};
width: ${props => props.width || "40%"};


grid-template-columns: repeat(3, minmax(0px,100px));
gap:0px;

align-items: flex-end;
justify-content: space-around;

`
export const TechsIcon=styled.img`
height: ${props => props.height || "80%"};
width: ${props => props.width || "12%"};
margin-top:${props => props.marginTop || "0px"};
padding-top:${props => props.paddingTop || "0px"};

`

export const GitHubIconImg=styled.img`
position:absolute;
height: ${props => props.height || "4.3vh"};
width: ${props => props.width || "2vw"};
top:${props => props.top || "55.1%"};
right:${props => props.right || "6%"};
border-radius: 100%;
align-items: center;
justify-content: center;
padding: 0px;
margin:0px;

&:hover{
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

`