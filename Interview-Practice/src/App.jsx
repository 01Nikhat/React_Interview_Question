
import './App.css'
// import UseState from './components/React-Hooks/useState'
// import UseProp from './components/React-Hooks/useProp';
// import GrandParent from './components/React-Hooks/useContext/GrandParent';
// import UseRef from './components/React-Hooks/UseRef';
// import Parent from './components/Child-Parent-Pass-Data/Parent';
// import Home from './components/React-Router/Dynamic-Router/Home';
import MyComponent from './components/customComponents/MyComponent';


function App() {
 const name = "nikhat";

  return (
    <>
     {/* useState use  <UseState /> */}
      {/*  useProp use   <UseProp name = {name} /> */}
      {/*  parent to child data pass <GrandParent /> */}
      {/* useRef use  <UseRef />  */}
      {/* child to parent data pass   <Parent />  */}
      {/*  For Simple Router <Home />  */}
      {/* Dynamic Router   <Home /> */}
      <MyComponent />
    </>
  )
}

export default App
