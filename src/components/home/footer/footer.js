import React, { Component } from 'react'
import { TimelineLite } from 'gsap/all'
import VisibilitySensor from 'react-visibility-sensor'

export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  render() {
    return (
      <div className='footer-wrapper flex-wrapper'>
        <div className='footer-container'>
          <p className='footer-text'>&copy; {this.props.Data.copyright}</p>
          <div className='footer-text-2-container'>
            <p className='footer-text'>{this.props.Data.poweredBy}</p>
            <img className='powered-by-image' src={this.props.Data.logo}/>
          </div>
        </div>
      </div>
    )
  }
}
