import React, { Component } from 'react'

export default class Footer extends Component {
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
