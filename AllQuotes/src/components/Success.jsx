/* eslint-disable react/prop-types */

const SuccessButton = ({ onButtonClick }) => {
 return (
    <button onClick={onButtonClick} style={{ backgroundColor: '#4CAF50', color: 'white' }}>Success</button>
 );
};

export default SuccessButton;
