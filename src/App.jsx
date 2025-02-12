import Login from "./login"
import { Routes, Route } from "react-router-dom";
import Markentery from "./Markentery";
function App() {
  return (
    <>
    
    <Routes>
        <Route path="/TableTaskReact/" element={<Login />} />
        <Route path="/TableTaskReact/marks" element={<Markentery />} />
    </Routes>
    </>
  )
}
export default App
