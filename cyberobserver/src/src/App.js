import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import DashBoard from './Components/DashBoard';

function App() {
  return (
    <div className="App" style={{flexDirection:"column",display:"flex"}}>
    <Navbar/>
    <DashBoard/>
    
    </div>
  );
}

export default App;
