import React, {Component} from 'react';
import Grid from './Grid/Grid';
import {fillCellGroup, fillStart} from './functions/fillGrid';
import Nav from './Nav/Nav';

import './App.css';
import GridStatus from './GridStatus/GridStatus';

class App extends Component {
  constructor(props) {
    super(props);

    let totalColumns
    let totalRows
    let totalCells
    let cellSize

    function size() {
      const width = window.innerWidth
      const height = window.innerHeight
      if (width >= height) {
        totalColumns = 350
        cellSize = width/totalColumns
        totalRows = Math.ceil(height/cellSize)
      } else {
        totalRows = 120
        cellSize = height/totalRows
        totalColumns = Math.ceil(width/cellSize)
      }
      totalCells = totalRows * totalColumns
    }

    size()

    this.state = {
      totalColumns,
      totalRows,
      totalCells,
      cellSize,
      totalCellsFilled: 0,
      fillableCells: [],
      grid: null,
      params: {
        colorChances: {
          random: null,
          same: 80,
          skew: 19
        },
        skew: {
          changeRange: 10,
          redLow: 0,
          redUpper: 255,
          blueLow: 0,
          blueUpper: 255,
          greenLow: 0,
          greenUpper: 255
        },
        node: {
          totalStart: 1,
          chanceNew: 0,
          chanceNewSame: 0,
          chanceNewDiff: 0
        }
      }
    }
  }

  //Start or restart filling grid.
  generateGrid = (e) => {
    e.preventDefault();
    
    //Handle start by filling initial nodes, or restart
    let newGrid = fillStart(this.state)

    //Fill amount of cells specified by fillGroupSize 
    newGrid = fillCellGroup(newGrid)

    //Set state with new grid of filled cells
    this.setState({
      newGrid
    })
  }
  
  
  render() {

    console.log(this.state.totalCells)

    return (
        <div className="App">
          <Nav generate={this.generateGrid}/>
          <main>
            <Grid grid={this.state.grid}/>
            {this.state.grid !== null && <GridStatus params={this.state.params}/>}
          </main>
        </div>   
    );
  }
}

export default App;