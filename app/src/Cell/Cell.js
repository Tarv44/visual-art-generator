import React, {Component} from 'react';
import './Cell.css'

export default class Cell extends Component {
    static defaultProps = {
        cellData: {
            id: '',
            column: 0,
            row: 0,
            opacity: 0,
            color: {
                red: 0,
                green: 0,
                blue: 0,
                rgb: ''
            }
        }
    }

    render() {
        // const cellColor = this.props.cellData.color ? this.props.cellData.color.rgb : '';
        // const animationDelay = this.props.cellData.animationDelay + 's'
        const styles = {
            backgroundColor: this.props.cellData.color.rgb,
            width: this.props.cellData.size,
            height: this.props.cellData.size
        };
        return (
            <div style={styles} className={'cell'}/>
        )
    }
}