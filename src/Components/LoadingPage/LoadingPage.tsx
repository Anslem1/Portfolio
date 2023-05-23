import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'

import './LoadingPage.css'
function LoadingPage() {

  const [loadingMessage, setLoadingMessage] = useState("");
  const loadingText = [
    "Holding tight while projects magically appear...",
    "Just a moment... projects are on their way!",
    "Tickling the API to fetch those projects...",
    "Loading..",
    "This is taking longer than expected",
    "Loading... Just pretending to be productive, one loading screen at a time",
    "Almost there..."
  ];




  useEffect(() => {
    setLoadingMessage('Projects are being fetched from an API. please hold');
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingText.length);
      const text = loadingText[randomIndex];
      setLoadingMessage(text);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='loader-container'>
      <ReactLoading type='cylon' color='#65FF65' height={100} width={100} />
      <div>
        <h1>{loadingMessage}</h1>
      </div>
    </div>
  )
}

export default LoadingPage
