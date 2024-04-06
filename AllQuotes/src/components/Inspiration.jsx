/* eslint-disable react/prop-types */

const InspirationButton = ({ onButtonClick }) => {
    return (
       <button onClick={onButtonClick} style={{ backgroundColor: '#FF9800', color: 'white' }}>Inspiration</button>
    );
   };
   
   export default InspirationButton;