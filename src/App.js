import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";

import "./styles/app.scss";

function App() {
  return (
    <div className='main-container'>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
