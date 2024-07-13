import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {DarkMode: true}

  button = () => {
    this.setState(prevState => ({DarkMode: !prevState.DarkMode}))
  }

  render() {
    const {DarkMode} = this.state
    const modeclassName = DarkMode ? 'dark-mode' : 'light-mode'
    const {buttontext} = DarkMode ? 'light-mode' : 'dark-mode'
    return (
      <div className="app-container">
        <div className={`container ${modeclassName}`}>
          <h1 className="heading">Click to change to Mode</h1>
          <div>
            <button onClick={this.button} type="button" className="button">
              {buttontext}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
