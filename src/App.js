import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import { Route } from "react-router-dom";

import Seccion1 from "./components/Seccion1";
import Seccion2 from "./components/Seccion2";
import Seccion3 from "./components/Seccion3";
import Seccion4 from "./components/Seccion4";
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
          
          <div className="section"><Seccion1/></div>
          <div className="section"><Seccion2/></div>
          <div className="section"><Seccion3/></div>
          <div className="section"><Seccion4/></div>
        </div>
      );
    }}
  />
);
export default App;



