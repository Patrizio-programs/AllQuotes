/* eslint-disable react/prop-types */

const LoveButton = ({ onButtonClick }) => {
    return (
       <button onClick={onButtonClick} style={{ backgroundColor: '#E91E63', color: 'white' }}>Love</button>
    );
   };
   
   export default LoveButton;