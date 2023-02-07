import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import profileImg from "../media/profileImg.jpg";
import whatsapp from "../media/whatsapp.svg";
import github from "../media/github.svg";
import linkedin from "../media/linkedin.svg";
import download from "../media/download.svg";
import mail from "../media/mail.svg"
import phone from "../media/phone.svg"
// import Carousel from "react-elastic-carousel";
// import { useDispatch, useSelector } from "react-redux";
import "@fontsource/dotgothic16";
import "@fontsource/englebert";

export default function Section1() {
    const [copyMail,setCopyMail]=useState(false);
    const [copyPhone,setCopyPhone]=useState(false);

    function handleClickMail(){
        setCopyMail(true)
        console.log("Mail",copyMail)
        // setTimeout(setCopyMail(false), 3500)
        // console.log("Mail",copyMail)
        setTimeout(function(){
            setCopyMail(false);
        }, 1000);

    }
    function handleClickPhone(){
        setCopyPhone(true)
        console.log("Phone",copyPhone)
        // setTimeout({setCopyPhone(false)}, 3500)
        // console.log("Phone",copyPhone)
        setTimeout(function(){
            setCopyPhone(false);
        }, 1000);
    }

    return (
    <AboutMainContainer>
        <SideBar>
            <ProfilePic src={profileImg}/>
            <IconsContainer>
                <a href="https://wa.me/+5493512356489" target="blank"><IconsAboutImg src={whatsapp}/></a>
                <a href="https://www.linkedin.com/in/adrian-laborde-732091199/" target="blank"><IconsAboutImg src={linkedin}/></a>
                <a href="https://github.com/Adrianl93" target="blank"><IconsAboutImg src={github}/></a>
            </IconsContainer>
            <AcvDownload href="https://www.dropbox.com/s/n6v8tgx73v2lbri/CV%20-%20Adrian%20Laborde-%20Full%20Stack%20developer%2C%20espa%C3%B1ol.pdf?dl=1">
                <CvButton>Descargar Cv<IconCvImg src={download}/></CvButton>
                </AcvDownload>
        </SideBar>
        
            <NameText left={"38%"}>Adrian</NameText>
            <NameText color={"#1C7EFF"} left={"65%"}>Laborde</NameText>
            <FullStackText>FullStack Developer</FullStackText>
            <AboutDescription>Desde muy pequeño me sentí atraído hacia las computadoras y la tecnología en general, a los 10 años aproximadamente realicé mi primer curso de diseño web, el cual aprendi solo HTML. Con el paso de los años mis intereses variaron, estudie Psicología y también Fotografía pero sin perder el interés por las computadoras, y recientemente ví mi oportunidad de iniciarme en el mundo IT al conocer el bootcamp de Soy Henry, en el cual aprendí mucho y fue la experiencia que me motivo a cambiar mi estilo de vida. Actualmente acabo de graduarme en Soy Henry y estoy buscando una empresa que pueda aprovechar tanto mis habilidades tech como mis habilidades blandas obtenidas mediante mis carreras anteriores.</AboutDescription>
            <CallToActionText>SI DESEAS PONERTE EN CONTACTO CONMIGO, ESCRIBEME A:</CallToActionText>
            <ContactsContainer bottom="10%">
                {copyMail && (<CopyNotification>Copied to Clipboard</CopyNotification>)}
                {copyPhone && (<CopyNotification left="55%">Copied to Clipboard</CopyNotification>)}
            </ContactsContainer>
            <ContactsContainer>
                <CopyToClipboard text="laborde.adrian2012@gmail.com" onCopy={handleClickMail} >
                    <IconsAboutImg src={mail} borderRadius="0px" />
                </CopyToClipboard>
                
                
                <CopyToClipboard text="+5493512356489" onCopy={handleClickPhone}>
                    <IconsAboutImg src={phone} borderRadius="0px" />
                    
                </CopyToClipboard>
                
            </ContactsContainer>



    </AboutMainContainer>
    
    );
};


export const AboutMainContainer=styled.div`
height: 100vh;
width: 100vw;
padding: 0px;
margin:0px;
`

//SIDEBAR
export const SideBar=styled.div`
height: 100vh;
width: 20vw;
padding: 0px;
margin:0px;
background-color: #D9D9D9;
`

export const ProfilePic=styled.img`
position:absolute;
height: 30vh;
border-radius: 100%;
box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
top: 3vw;
left: 7vh;
&:hover{
    box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.35);
    top: 2.8vw;
    
}
`

export const IconsContainer=styled.div`
position:relative;
display:grid;
top: 50vh;
padding:0px;
margin: 0px;
margin-left: 11%;
width: fit-content;


grid-template-columns: repeat(3, minmax(0px,100px));
gap:0px;


`

export const IconsAboutImg=styled.img`
height: ${props => props.height || "7vh"};
border-radius: ${props => props.borderRadius || "0px"};
filter:drop-shadow(1px 1px 1px #000000);
/* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */

&:hover{
    cursor: pointer;
    /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5); */
    filter:drop-shadow(1px 1px 2px #000000);
}
`

export const CvButton=styled.h1`
display: flex;
position: relative;
align-items: center;
width: 85%;
left:7%;
text-decoration: none;
justify-content: space-around;
top: 70vh;
font-family: 'DotGothic16';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 0px;
/* or 0% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;
height: 8vh;
color: #D9D9D9;;
background: #7B98BD;
border: 2px solid #000000;
border-radius: 30px;

-webkit-text-stroke: #000000 0.1px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
&:hover{
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
}

`
export const IconCvImg=styled.img`
display: flex;
margin-top: 2%;
height: 6vh;
align-items: center;
justify-content: center;
align-self: center;


`


//MAIN
export const AboutRightContainer=styled.div`
height:99%;
width: 98%;


border:1px solid red;
`
export const NameText=styled.h1`
position: absolute;
width: max-content;
height: 90px;
top: ${props => props.top || "-4%"};
left: ${props => props.left || "30%"};


font-family: 'DotGothic16';
font-style: normal;
font-weight: 400;
font-size: 96px;
line-height: 0%;
/* or 0px */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.05em;
color: ${props => props.color || "#FFDB99"};

`
export const FullStackText=styled.h1`
position: absolute;
font-family: 'DotGothic16';
font-style: normal;
font-weight: 400;
font-size: ${props=> props.fontSize || "40px"};
line-height: 0px;
/* or 0% */

top: ${props => props.top || "20%"};
left: ${props => props.left || "38%"};

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;

color: #DB6260;

`

export const AboutDescription=styled.p`
position: absolute;
width: 55%;
height: 54px;
top: ${props => props.top || "50%"};
left: ${props => props.left || "38%"};

font-family: 'Englebert';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 29px;
/* or 0% */

display: flex;
align-items: center;
text-align: justify;
letter-spacing: 0.03em;
text-transform: uppercase;

color: #FFFFFF;

`

export const CallToActionText=styled.h1`
position: absolute;
width: 547px;
height: 54px;
top: ${props => props.top || "75%"};
left: ${props => props.left || "38%"};

font-family: 'DotGothic16';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 0px;
/* or 0% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.03em;
text-transform: uppercase;

color: #FFDB99;
`

export const MailText=styled.span`
position: absolute;
width: 275px;
height: 25px;
top: ${props => props.top || "87%"};
left: ${props => props.left || "47%"};

font-family: 'Englebert';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 29px;
/* or 145% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.03em;



color: #FFFFFF;
&:hover{
    text-decoration-line: underline;
    cursor:pointer;
}
`


export const AcvDownload=styled.a`
text-decoration: none;
`

export const ContactsContainer=styled.div`
position: absolute;
display: flex;
width: 20vw;
justify-content: space-around;
left:45vw;
bottom:${props=>props.bottom || "4%"};


`

export const CopyNotification=styled.h1`
position:absolute;
width: max-content;
font-family: 'Englebert';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 29px;
bottom:${props=>props.bottom || "20%"};
left: ${props=>props.left || "6%"};
color: whitesmoke;



`