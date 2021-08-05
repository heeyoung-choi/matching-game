import Board from "./component/Board";
import React, { Component } from 'react'

export class App extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      size : 3,
      face : Array(2),
      data:[],
      cur:[],
      finish: [],
      point: 0
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
  detect(){
    let {size, face, data, cur, finish, point} = this.state
    console.log(cur)
    if (cur.length === 2)
    { 
      
      if (data[cur[0]] === data[cur[1]])
      {
        finish[cur[0]] = true
        finish[cur[1]] = true
        point++;
        console.log("bug")
      }
      face = finish.slice()
      cur = []
    
      setTimeout(this.setState({
        size: size,
        face: face,
        data:data,
        cur: cur,
        finish: finish,
        point:point
      }), 1000)
    }
  }
  handleClick(i)
  {
    if (this.state.finish[i])
    return;
    let cur = this.state.cur
    let face = this.state.face
    cur = cur.concat(i)
    face[i] = !face[i]
    this.setState({
      cur: cur,
      face: face
    })
    this.detect()
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
        <h1>{this.state.point}</h1>
        <Board 
        size={this.state.size} 
        onClick ={(i) => this.handleClick(i)}
        face={this.state.face}
        list={this.state.data}
        />
      </div>
    )
  }
}

export default App
