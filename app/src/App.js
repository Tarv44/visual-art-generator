import React, {Component} from 'react';
import Grid from './Grid/Grid';
import Nav from './Nav/Nav';

import './App.css';
import GridStatus from './GridStatus/GridStatus';
import ClipLoader from "react-spinners/ClipLoader";

import {API_ENDPOINT} from './config'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generating: false,
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
    this.setState({generating: true})
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
          generating: false,
          svg: res.svg
        })
      })
  }
  
  render() {

    const LoadingMsg = (
      <div style={{textAlign: "center"}}>
        <p>This program uses an algorithm to randomly color pixels based on various probabilities.</p>
        <p>Given your screen size, the program is currently generating {window.innerWidth * window.innerHeight} uniquely colored pixels.</p>
        <p>This could take a few minutes...</p>
        <ClipLoader color={"black"} loading={true} size={150} />
      </div>
    )

    return (
        <div className="App">
          <Nav generate={this.generateGrid}/>
          <main>
            {this.state.generating
              ? LoadingMsg
              : <div dangerouslySetInnerHTML={{__html: this.state.svg}} />}
            {this.state.grid !== null && <GridStatus params={this.state.params}/>}
          </main>
        </div>   
    );
  }
}

export default App;