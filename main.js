import React from 'react'
import ReactDOM from 'react-dom'
import SignIn from './components/SignIn'

class Main extends React.Component {

  state = {
    showSignIn: false
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {showSignIn: true}
    })
  }

  close = () => {
    this.setState((prevState) => {
      return {showSignIn: false}
    })
  }

  render () {
    return (
      <div>
        <button
          type='submit'
          onClick={this.handleClick}>
          Sign In
        </button>
        {this.state.showSignIn && (
          <SignIn close={this.close}/>
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('contentLayer')
)
