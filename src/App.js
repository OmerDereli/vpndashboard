import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainDash from "./Components/MainDash/MainDash";
import UploadImage from "./Components/UploadImage/Uploadimage";
function App() {


  return (
    <div className="App">
      <div className="main">
        <Sidebar/>
        <MainDash />
      </div>
    </div>
  );
}

export default App;
