
import { useState } from 'react';
import QuoteCard from '../components/QuoteCard'
import SuccessButton from '../components/Success';

import InspirationButton from '../components/Inspiration';
import HappinessButton from '../components/Happiness';
import Love from '../components/Love';



function Home() {
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
    
  
  
     const loveButton = async () => {
      try {
         const response = await fetch('https://api.quotable.io/random?query=love');
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         const data = await response.json();
         setQuote(data.content); // The Quotable API returns the quote in the 'content' property
      } catch (error) {
         console.error('Failed to fetch quote:', error);
      }
     };
  
  
     const happinessButton = async () => {
      try {
         const response = await fetch('https://api.quotable.io/random?query=happiness');
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         const data = await response.json();
         setQuote(data.content); // The Quotable API returns the quote in the 'content' property
      } catch (error) {
         console.error('Failed to fetch quote:', error);
      }
     };
  
  
     const inspirationButton = async () => {
      try {
         const response = await fetch('https://api.quotable.io/random?query=inspiration');
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
      
        <QuoteCard quote={quote}/>
      
        <div className="container">
        <div className="row">
          <div className="col-md-6">
          <SuccessButton onButtonClick={successButton} className="mb-3" />
          <br></br>
          <br></br>
  
        <InspirationButton className="mb-3" onButtonClick={inspirationButton} />
        <br></br>
          <br></br>
          </div>
          <div className="col-md-6">
          <HappinessButton className="mb-3" onButtonClick={happinessButton}/>
          <br></br>
          <br></br>
        <Love className="mb-3" onButtonClick={loveButton} />
          </div>
        </div>
      </div>
  
  
  
      
         
        </div>
      
      </>
    )
  }
  
  export default Home
  