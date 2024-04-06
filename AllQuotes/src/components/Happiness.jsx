/* eslint-disable react/prop-types */

const HappinessButton = ({ onButtonClick }) => {
    return (
       <button onClick={onButtonClick} style={{ backgroundColor: '#FFEB3B', color: 'black' }}>Happiness</button>
    );
   };
   
   export default HappinessButton;