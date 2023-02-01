import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import { Route } from "react-router-dom";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
const anchors = ["AboutMe", "ProfesionalSkills", "Projects", "ContactMe"];

const App = () => (
  
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#39446C","#FFDB99","#FFDB99","#39446C" ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div className="App"> 
          
          <div className="section"><Section1/></div>
          <div className="section"><Section2/></div>
          <div className="section"><Section3/></div>
          <div className="section"><Section4/></div>
        </div>
      );
    }}
  />
);
export default App;



