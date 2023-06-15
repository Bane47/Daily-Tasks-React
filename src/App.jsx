import './App.css';
import Calculator from './Components/class'
import Calculate from './Components/function';
function App() {
 
  
  return (
    <div className="App">
    <h1>Calculator-using Class components</h1>      
    <h4>Please choose the operation</h4>
<Calculator></Calculator>
<Calculate></Calculate>
    </div>
  );
}

export default App;
