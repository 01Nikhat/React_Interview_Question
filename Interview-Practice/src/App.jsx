
import './App.css'
import UseState from './React-Hooks/useState'
import UseProp from './React-Hooks/useProp';
import GrandParent from './React-Hooks/useContext/GrandParent';
import UseRef from './React-Hooks/UseRef';
import Parent from './Child-Parent-Pass-Data/Parent';

function App() {
 const name = "nikhat";

  return (
    <>
      <UseState />
      <UseProp name = {name} />
      <GrandParent />
      <UseRef />
      <Parent />
    </>
  )
}

export default App
