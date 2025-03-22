
import './App.css'
import UseState from './React-Hooks/useState'
import UseProp from './React-Hooks/useProp';
import GrandParent from './React-Hooks/useContext/GrandParent';

function App() {
 const name = "nikhat";

  return (
    <>
      <UseState />
      <UseProp name = {name} />
      <GrandParent />
    </>
  )
}

export default App
