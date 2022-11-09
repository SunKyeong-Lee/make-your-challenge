import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { DataProvider } from "./context/DataContext";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from './pages/Login';
import Layout from "./pages/Layout";
import ChallengeDetail from "./pages/ChallengeDetail";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="login" element={<Login />} />
        <Route path="main" element={<Layout />}>
          <Route path=':id' element={<ChallengeDetail />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
