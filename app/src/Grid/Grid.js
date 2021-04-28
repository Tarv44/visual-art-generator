import React, {Component} from 'react';
import Column from '../Column/Column';
import './Grid.css'

class Grid extends Component {

    render() {
        const columns = this.props.grid
            ? this.props.grid.columns.map((column, i) => {
                return <Column columnData={column} key={i}/>
            })
            : null

        return (
            <div id="grid" className="grid">
                {columns}
            </div>
        )
    }
}

export default Grid;