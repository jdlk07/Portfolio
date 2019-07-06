import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='banner-wrapper'>
        <h2 className='banner-header'>{this.props.Data.header}</h2>
        <p className='banner-body-text'>{this.props.Data.body}</p>
      </div>
  )}
}
