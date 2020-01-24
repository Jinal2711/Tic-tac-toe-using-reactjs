import React from 'react';
import './App.css';
import Popup from "reactjs-popup";


class App extends React.Component {

  state = {
    selectedPlayer: '',
    PLAYER_ONE: 'X',
    PLAYER_TWO: 'O',
    board: ["", "", "", "", "", "", "", "", ""],
    disabled: true
  }
  handleClick(index) {
    if (this.state.board[index] === "") {
      this.state.board[index] = this.state.selectedPlayer;
      this.setState({
        disabled: false,
        board: this.state.board,
        selectedPlayer: this.state.selectedPlayer === this.state.PLAYER_ONE ? this.state.PLAYER_TWO : this.state.PLAYER_ONE
      })
    }
    this.winningCondition();
  }

  winningCondition() {
    let winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    winningCombos.forEach(indexes => {
      const [a, b, c] = indexes;
      if (this.state.board[a] == "" || this.state.board[b] == "" || this.state.board[c] == "") {
        return
      }
      console.log(this.state.board[a] == this.state.board[b]);
      if (this.state.board[a] == this.state.board[b] && this.state.board[a] == this.state.board[c]) {
        alert(this.state.board[a] + " Wins!!!");
        this.setState({
          selectedPlayer: '',
          PLAYER_ONE: 'X',
          PLAYER_TWO: 'O',
          board: ["", "", "", "", "", "", "", "", ""],
          disabled: true
        })
      }
    });
  }

  onRadioChange = (e) => {
    this.setState({
      selectedPlayer: e.target.value,
      disabled: false
    })
  }

  render() {
    return (
      <div>
        <div className="selectPopup">
          <Popup trigger={<button className="selectBtn"> Select Player</button>} position="bottom center">
            <div className="selectPlayerRadio">
              <div class="radio">
                <label class="radio-inline">
                  <input type="radio"
                    value='X'
                    name="optradio" onChange={this.onRadioChange}
                    checked={this.state.selectedPlayer === 'X'} />Player X</label>
                <label class="radio-inline">
                  <input type="radio"
                    value='O'
                    name="optradio" onChange={this.onRadioChange}
                    checked={this.state.selectedPlayer === 'O'} />Player O</label>
              </div>
            </div>
          </Popup>
        </div>

        <div className="board">
          {this.state.board.map((box, index) => {
            return <div onClick={() => !this.state.disabled ? this.handleClick(index) : alert('Please select player')} data-cell-id={index} key={index} className="square">{box}</div>
          })}
        </div>
      </div>
    )
  }
}
export default App;
