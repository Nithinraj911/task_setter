
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './pages/LoginPage.jsx';
// import RegistrationPage from './pages/RegistrationPage.jsx';
// import HomePage from './pages/HomePage.jsx';
// import NoteCreateTab from './components/NoteCreateTab.jsx';
// import ShowTab from './components/ShowTab.jsx';



import {routes} from './services/routesObj.jsx';

function App() {
  

  return (
    
    <Routes>
      {routes.map((route,Index)=>(
        <Route key={Index} path={route.path} element={route.element} />
      ))

      }
      {/* <Route path="/" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/notecreater" element={<ShowTab />} /> */}
    </Routes>
 
  )
}

export default App
