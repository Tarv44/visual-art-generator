import React, {Component} from 'react';
import Grid from './Grid/Grid';
import Nav from './Nav/Nav';

import './App.css';
import GridStatus from './GridStatus/GridStatus';

import {API_ENDPOINT} from './config'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      svg: null,
      grid: null
      // totalColumns,
      // totalRows,
      // totalCells,
      // cellSize,
      // totalCellsFilled: 0,
      // fillableCells: [],
      // grid: null,
      // params: {
      //   colorChances: {
      //     random: null,
      //     same: 80,
      //     skew: 19
      //   },
      //   skew: {
      //     changeRange: 10,
      //     redLow: 0,
      //     redUpper: 255,
      //     blueLow: 0,
      //     blueUpper: 255,
      //     greenLow: 0,
      //     greenUpper: 255
      //   },
      //   node: {
      //     totalStart: 1,
      //     chanceNew: 0,
      //     chanceNewSame: 0,
      //     chanceNewDiff: 0
      //   }
      // }
    }
  }

  //Start or restart filling grid.
  generateGrid = (e) => {
    e.preventDefault();
    const body = {
      width: window.innerWidth, 
      height: window.innerHeight
    }

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    } 

    fetch(`${API_ENDPOINT}/generate`,options)
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => { throw err })
        }
        return res.json()
      })
      .then(res => {
        this.setState({
          svg: res.svg
        })
      })
  }
  
  
  render() {

    return (
        <div className="App">
          <Nav generate={this.generateGrid}/>
          <main>
            {this.state.svg && <div dangerouslySetInnerHTML={{__html: this.state.svg}} />}
            {/* <Grid grid={this.state.grid}/> */}
            {this.state.grid !== null && <GridStatus params={this.state.params}/>}
          </main>
        </div>   
    );
  }
}

export default App;