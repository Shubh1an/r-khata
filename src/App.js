import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [otps,setOtp]= useState("")
  useEffect(()=>{
    const ac = new AbortController();
    navigator.credentials
    .get({
      otp: { transport: ["sms"] },
      signal: ac.signal
    })
    .then((otp) => {
      setOtp(otp)
      console.log("h=>>>>>>",otp)
      ac.abort();
    })
    .catch((err) => {
      ac.abort();
      alert(err)
      console.log(err);
    });
  })
  return (
    <div className="App">
     <Header/>
     <LandingPage/>
     <Footer/>
    </div>
  );
}

export default App;
