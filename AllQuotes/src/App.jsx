
import './App.css'
import React, { useState } from 'react';
import QuoteCard from './components/Quote'
import SuccessButton from './components/Success';
import Nav from './components/Nav';

function App() {
  const [quote, setQuote] = useState("The only way to do great work is to love what you do.");
  
  const successButton = async () => {
    try {
       const response = await fetch('https://api.quotable.io/random?query=success');
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       const data = await response.json();
       setQuote(data.content); // The Quotable API returns the quote in the 'content' property
    } catch (error) {
       console.error('Failed to fetch quote:', error);
    }
   };
  


  return (
    <>
      <div>
      <Nav/>
      <QuoteCard quote={quote}/>
      <SuccessButton onButtonClick={successButton}/>
       
      </div>
      
    </>
  )
}

export default App
