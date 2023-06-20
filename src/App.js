import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <LandingPage/>
     <Footer/>
    </div>
  );
}

export default App;
