import { Component } from 'react'
import "./style.css"
export default class Button extends Component {
  render() {
    return (
      <div>
        <button className="primary">Primary</button>
        <button className="secondary">Secondary</button>
        <button className="success">Success</button>
        <button className="warning">Warning</button>
        <button className="danger">Danger</button>
        <button className="info">Info</button>
        <button className="light">Light</button>
        <button className="dark">Dark</button>
        <button className="link">Link</button>
      </div>
    )
  }
}
