
import './App.css'
import UseState from './React-Hooks/useState'
import UseProp from './React-Hooks/useProp';
import GrandParent from './React-Hooks/useContext/GrandParent';
import UseRef from './React-Hooks/UseRef';
import Parent from './Child-Parent-Pass-Data/Parent';
import Home from './React-Router/Router/Home';

function App() {
 const name = "nikhat";

  return (
    <>
     {/* useState use  <UseState /> */}
      {/*  useProp use   <UseProp name = {name} /> */}
      {/*  parent to child data pass <GrandParent /> */}
      {/* useRef use  <UseRef />  */}
      {/* child to parent data pass   <Parent />  */}
      <Home />
    </>
  )
}

export default App
