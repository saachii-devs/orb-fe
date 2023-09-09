import Navbar from "./components/Navbar/Navbar";
import Icon from "./components/IconElement/icon"
import SummaryParameters from "./components/SummaryParameters/SummaryParameters";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import './index.css'
import Item from "./components/ItemSummary/Item";
import Parameters from "./components/Parameters/Parameters";
import Factors from "./components/HealthCareProfessionals/nteractionWithExtrenalComp/Factors";
import Triggers from "./components/HealthCareProfessionals/nteractionWithExtrenalComp/Triggers";
import Login from "./pages/Login";
import Insights from "./pages/Insights";
import SubParameters from "./pages/SubParameters";
import Footer from "./components/Footer";
import EarlyWarnng from "./components/HealthCareProfessionals/nteractionWithExtrenalComp/EarlyWarnng";
import WarningDisease from "./components/HealthCareProfessionals/nteractionWithExtrenalComp/WarningDisease";
import WorkoutRegime from "./components/WorkoutRegime/WorkoutRegime";
import BiomoleculeFunctioning from "./pages/BiomoleculeFunctioning/BiomoleculeFunctioning";
import SubBiomoleculeFunctioning from "./pages/BiomoleculeFunctioning/SubBiomoleculeFunctioning";
import Button from "./components/Button";
import InteractionWithExternalFactors from "./pages/ForHealthCareProfessionals/InteractionWithExternalFactors";
import EarlyWarningSystem from "./pages/ForHealthCareProfessionals/EarlyWarningSystem";
import EarlyWarinngSystemDiabetes from "./pages/ForHealthCareProfessionals/EarlyWarinngSystemDiabetes";
import InteractionWithFood from "./pages/ForHealthCareProfessionals/InteractionWithFood";
import WorkoutRegimePage from "./pages/ForHealthCareProfessionals/WorkoutRegimePage";
import PeakPerformance from "./pages/ForHealthCareProfessionals/PeakPerformance";
import Account from "./pages/Account";
import { useEffect, useState } from "react";
import Summary from "./components/Summary/Summary";
function App() {

 
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
        <Route path="/" element={<Login/>}/>
          {/* <Route index element={<Home />} />*/}
          <Route path="Insights" element={<Insights/>} />
          <Route path="Insights/Summary/:id" element={<BiomoleculeFunctioning/>} />
          <Route path="Insights/Summary/:id/:subid" element={<SubBiomoleculeFunctioning/>} />
          <Route path="Parameters" element={<SubParameters/>} />
      </Routes>
    </BrowserRouter>
      
      {/* <SummaryParameters/> */}
      {/* <Summary/> */}
      {/* <Item/> */}
      {/* <Parameters/> */}
      {/* <Icon/> */}
      {/* <Factors/> */}
      {/* <Triggers/> */}
      
      {/* <Insights/> */}
      
      {/* <Footer/> */}
      {/* <EarlyWarnng/> */}
      {/* <WarningDisease/> */}
      {/* <WorkoutRegime/> */}
      {/* <BiomoleculeFunctioning/> */}
      {/* <SubBiomoleculeFunctioning/> */}
      {/* <InteractionWithExternalFactors/> */}
      {/* <EarlyWarningSystem/> */}
      {/* <EarlyWarinngSystemDiabetes/> */}
      {/* <InteractionWithFood/> */}
      {/* <WorkoutRegimePage/> */}
      {/* <PeakPerformance/> */}
      {/* <Account/> */}
      {/* <Button/> */}
    </>
  );
}

export default App;
