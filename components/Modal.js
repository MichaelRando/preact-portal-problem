import React from 'react'
import ReactDOM from 'react-dom'

let dialogLayer
const Modal = ModalContent => class extends React.Component {

  componentWillMount() {
    dialogLayer = document.getElementById('dialogLayer')
  }

  render() {
    return (
      ReactDOM.createPortal(
        (<ModalContent ref={(ref) => { this._portal = ref }} {...this.props}/>)
        , dialogLayer)
    )
  }
}

export default Modal
