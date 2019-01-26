import React from 'react'
import data from '../data/tableSetting.json';
import {Button} from 'reactstrap';
const Previous =(props)=>{
    return(
        <div className="previous-container">
           <button className="previous-button" onClick={()=>props.handlePreviousClick(props.currentStep)}
           disabled={props.currentStep <= 1}
           ></button>
        </div>
    )
}
export default Previous