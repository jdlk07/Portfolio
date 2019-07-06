import React, { Component } from 'react'

export default class TextComponent extends Component {
  render() {
    return(
      <div className='text-component-container'>
        {this.props.data.header ? <h2 className='text-component-header'>{this.props.data.header}</h2> : ''}
        <h4 className='text-component-sub-header'>{this.props.data.subHeader}</h4>
        <p className='text-component-body-text body-text'>{this.props.data.body}</p>
      </div>
    )
  }
}
