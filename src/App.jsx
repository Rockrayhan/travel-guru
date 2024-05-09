import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import bg from "../public/images/bg.png";
import './App.css' ;


function App() {
  const bgStyle = {
    backgroundImage: `url(${bg})`,
    height: '100vh',
    padding:'30px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width:'100%',
    position: 'relative', // Add position relative to the parent div
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
    pointerEvents: 'none', // Allow pointer events to pass through
  };

  return (
    <div style={bgStyle}>
      <div style={overlayStyle}></div> {/* Overlay with semi-transparent black color */}
      <Header />
      <div style={{ position: 'relative' }}> {/* Add position relative to the parent div */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
