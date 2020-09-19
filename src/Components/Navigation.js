import React from 'react';

const Navigation = (props) => {
 return (
    <div className="NavigationContainer">    
      <button onClick={props.handleBackButtonClick}>{'<'} Previous</button>
      <button onClick={props.handleNextButtonClick}>Next {'>'}</button>
    </div>
)
}

export default Navigation;