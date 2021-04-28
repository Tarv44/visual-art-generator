import React from 'react'
import './GridStatus.css'

export default function GridStatus(props) {
    return (
        <div className='grid-status'>
            <p>
                <span>Same: {props.params.colorChances.same.toFixed(2)}%</span> | 
                <span>Skew: {props.params.colorChances.skew.toFixed(2)}%</span> | 
                <span>Random: {props.params.colorChances.random.toFixed(2)}%</span> | 
                <span>Range of skewing: +-{props.params.skew.changeRange}</span>
            </p>
            <p>
                <span>Red Range: {props.params.skew.redLow} - {props.params.skew.redUpper}</span> | 
                <span>Blue Range: {props.params.skew.blueLow} - {props.params.skew.blueUpper}</span> | 
                <span>Green Range: {props.params.skew.greenLow} - {props.params.skew.greenUpper}</span>
            </p>
        </div>
    )
}
