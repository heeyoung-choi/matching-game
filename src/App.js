import Board from './component/Board';
import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 3,
      face: Array(2),
      data: [],
      cur: [],
      finish: [],
      point: 0,
      enableClick: true,
      turn: 0
    };
    this.restart(this.state.size);
  }

  handleClick(i) {
    if (this.state.finish[i]) return;
    if (!this.state.enableClick) return;
    let cur = this.state.cur;
    let data = this.state.data;
    if (cur.includes(i)) return;
    let face = this.state.face;
    cur = cur.concat(i);
    face[i] = !face[i];
    this.setState({
      cur: cur,
      face: face,
      turn: this.state.turn + 1
    });
    if (cur.length == 2) {
      this.setState({
        enableClick: false,
      });
      let finish = this.state.finish.slice();
      let point = 0;
      if (data[cur[0]] === data[cur[1]]) {
        point = 100;
        finish[cur[0]] = true;
        finish[cur[1]] = true;
      }
      setTimeout(() => {
        this.setState({
          cur: [],
          face: finish.slice(),
          enableClick: true,
          point: this.state.point + point,
          finish: finish,
        });
      }, 500);
    }
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  restart(size)
  {
    let temp = [...Array(this.state.size ** 2).fill(false)];
    // console.log(temp)
    let {face, data, finish} = Object.assign(this.state)
    for (let i = 0; i < this.state.size ** 2 / 2; i++) {
      let rd = this.getRandomInt(100);
      data.push(rd);
      data.push(rd);
    }
    this.shuffle(data);
    face = temp;
    finish = Array(this.state.size ** 2).fill(false);
    this.setState({
      size: size,
      face: face,
      finish: finish,
      data: data,
      point: 0,
      turn: 0,
      cur: []
    })
  }
  render() {
    return (
      <div className='App'>
        <div className='info'>
          <h2>Point: {this.state.point}</h2>
          <h2>Turns taken:{this.state.turn}</h2>
        </div>
        <div className="control-panel">
          <button 
          className="btn btn-control"
          onClick={() => this.restart(this.state.size)}
          >Restart</button><button 
          className="btn btn-control"
          onClick={() => this.restart(3)}
          >3</button><button 
          className="btn btn-control"
          onClick={() => this.restart(4)}
          >4</button>
          <button 
          className="btn btn-control"
          onClick={() => this.restart(5)}
          >5</button>
        </div>
        <Board
          size={this.state.size}
          onClick={(i) => this.handleClick(i)}
          face={this.state.face}
          list={this.state.data}
          finish={this.state.finish}
        />
      </div>
    );
  }
}

export default App;
