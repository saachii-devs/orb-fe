import Navbar from "./components/Navbar/Navbar";
import Icon from "./components/IconElement/icon"
import SummaryParameters from "./components/SummaryParameters/SummaryParameters";
import Summary from "./components/Summary/Summary";
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
import WorkoutRegime from "./components/HealthCareProfessionals/WorkoutRegime";
import BiomoleculeFunctioning from "./pages/BiomoleculeFunctioning/BiomoleculeFunctioning";
import SubBiomoleculeFunctioning from "./pages/BiomoleculeFunctioning/SubBiomoleculeFunctioning";
import Button from "./components/Button";
import InteractionWithExternalFactors from "./pages/ForHealthCareProfessionals/InteractionWithExternalFactors";
import EarlyWarningSystem from "./pages/ForHealthCareProfessionals/EarlyWarningSystem";
function App() {
  return (
    <>
      <Navbar/>
      {/* <SummaryParameters/> */}
      {/* <Summary/> */}
      {/* <Item/> */}
      {/* <Parameters/> */}
      {/* <Icon/> */}
      {/* <Factors/> */}
      {/* <Triggers/> */}
      {/* <Login/> */}
      {/* <Insights/> */}
      {/* <SubParameters/> */}
      {/* <Footer/> */}
      {/* <EarlyWarnng/> */}
      {/* <WarningDisease/> */}
      {/* <WorkoutRegime/> */}
      {/* <BiomoleculeFunctioning/> */}
      {/* <SubBiomoleculeFunctioning/> */}
      {/* <InteractionWithExternalFactors/> */}
      <EarlyWarningSystem/>
      {/* <Button/> */}
    </>
  );
}

export default App;
