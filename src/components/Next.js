import React from 'react';
import data from '../data/tableSetting.json';
import {Button} from 'reactstrap';

const Next =(props)=>{
    return(
        <div className="next-container">
         <button className="next-button" onClick={()=>{props.handleNextClick(props.currentStep)}}
          disabled={props.currentStep > data.length}
         ></button>
        </div>
    )
}
export default Next