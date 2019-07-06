import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className='contact-wrapper flex-wrapper'>
        <div className='contact-container width-limiter-container'>
          <a  className='email-link' href={`mailto:${this.props.Data.email}`}>{this.props.Data.email}</a>
          <div className='logo-container'>
            {this.props.Data.other.map((item, index) =>
              <a href={item.link}><img className='logo-image' src={item.logo}/></a>
            )}
          </div>
        </div>
      </div>
    )
  }
}
