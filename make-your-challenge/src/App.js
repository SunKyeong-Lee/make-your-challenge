import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { DataProvider } from "./context/DataContext";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from './pages/Login';
import Layout from "./pages/Layout";
import ChallengeDetail from "./pages/ChallengeDetail";
import StampBoard from './components/StampBoard';
import Diary from './components/Diary';
import Memo from './components/Memo';
import ChallengeLayout from './pages/ChallengeLayout';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="login" element={<Login />} />
        <Route path="main" element={<Layout />}>
          <Route index element={<ChallengeDetail />} />
          <Route path=':id' element={<ChallengeLayout />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
