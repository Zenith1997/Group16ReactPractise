import logo from './logo.svg';
import {Navbar} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <Navbar bg="myRed" variant="dark">
       <Navbar.Brand>
         Logo
       </Navbar.Brand>
     </Navbar>
    </div>
  );
}

export default App;
