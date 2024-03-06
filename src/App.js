import './App.css';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsandConditions from './pages/TermsandConditions';
import HomeScreen from './pages/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/terms-conditions" element={<TermsandConditions/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
