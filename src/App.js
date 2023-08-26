import Navbar from "./components/Navbar/Navbar";
import Icon from "./components/IconElement/icon"
import SummaryParameters from "./components/SummaryParameters/SummaryParameters";
import Summary from "./components/Summary/Summary";
import './index.css'
import Item from "./components/ItemSummary/Item";
import Parameters from "./components/Parameters/Parameters";
import Factors from "./components/HealthCareProfessionals/nteractionWithExtrenalComp/Factors";
import Login from "./pages/Login";
import Insights from "./pages/Insights";
import SubParameters from "./pages/SubParameters";
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
      {/* <Login/> */}
      {/* <Insights/> */}
      <SubParameters/>
    </>
  );
}

export default App;
