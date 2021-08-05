import Board from "./component/Board";
import React, { Component } from 'react'

export class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      size : 4,
      face : Array(2),
      data:[],
      cur:[],
      finish: [],
      point: 0,
      enableClick: true
    }
    let temp =  [...Array(this.state.size ** 2).fill(false)];
    // console.log(temp)
    for (let i = 0; i < this.state.size ** 2 / 2; i++)
    {
      let rd = this.getRandomInt(100)
      this.state.data.push(rd)
      this.state.data.push(rd)
    }
    this.shuffle(this.state.data)
    this.state.face = temp
    this.state.finish = Array(this.state.size ** 2).fill(false)
    
  }
  
  handleClick(i)
  {
    if (this.state.finish[i])
    return;
    if (!this.state.enableClick)
    return;
    let cur = this.state.cur
    let data = this.state.data
    if (cur.includes(i))
    return;
    let face = this.state.face
    cur = cur.concat(i)
    face[i] = !face[i]
    this.setState({
      cur: cur,
      face: face
    })
    if (cur.length == 2)
    {
      this.setState({
        enableClick: false
      })
      let finish = this.state.finish.slice()
      let point = 0
      if (data[cur[0]] === data[cur[1]])
      {
        point = 100
        finish[cur[0]] = true
        finish[cur[1]] = true
      }
      setTimeout(() => {
        this.setState({
          cur: [],
          face: finish.slice(),
          enableClick: true,
          point: this.state.point + point,
          finish: finish
        })
      }, 1000)
    }
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  render() {
    return (
      <div className="App">
        
        <div className="info">
        <h1>{this.state.point}</h1>
        </div>
        <Board 
        size={this.state.size} 
        onClick ={(i) => this.handleClick(i)}
        face={this.state.face}
        list={this.state.data}
        finish={this.state.finish}
        />
      </div>
    )
  }
}

export default App
