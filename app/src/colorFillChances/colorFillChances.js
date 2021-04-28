import {Component} from 'react';
import GridContext from '../GridContext';
import './colorFillChances.css';

export default class colorFillChances extends Component {
    static contextType = GridContext;
    render() {
        const currentGrid = this.context[this.props.gridId]
        let newColorChance = 100 - (parseFloat(currentGrid.formConstraints.colorChances.same) + parseFloat(currentGrid.formConstraints.colorChances.skew))
        newColorChance = newColorChance < 0 ? 0 : newColorChance
        return (
            <fieldset className='colorFillChances'>
                <legend>Color Fill Chances</legend>
                <fieldset>
                    <legend>Same</legend>
                    <label htmlFor='sameColor'>Chance of same color:</label>
                    <input 
                        type='text' 
                        name='sameColor' 
                        className='sameColor'
                        placeholder={currentGrid.formConstraints.colorChances.same}
                        onChange={e => this.context.updateColorChances(this.props.gridId, 'same', e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <legend>Skewed</legend>
                    <label htmlFor='skewedColor'>Chance of skewed color:</label>
                    <input 
                        type='text' 
                        name='skewedColor' 
                        className='skewedColor'
                        placeholder={currentGrid.formConstraints.colorChances.skew}
                        onChange={e => this.context.updateColorChances(this.props.gridId, 'skew', e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <legend>Random</legend>
                    <label htmlFor='randomColor'>Chance of random color (automatic): {newColorChance}</label>
                </fieldset>              
            </fieldset>
        )
    }
}