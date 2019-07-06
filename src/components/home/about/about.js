import React, { Component } from 'react'
import TextComponent from '../../elements/textComponent/textComponent'

import Map from './map/map'

import learningImg from './media/reactNative.png'
import { ReactComponent as CogsImg } from './media/cogs.svg'

const LearningComponent = (props) => {
  return(
    <div className='learning-wrapper'>
      <p className='learning-header body-text'>{props.data.header}</p>
      <div className='image-container'>
        <img className='learning-image' src={learningImg}/>
      </div>
      <p className='learning-footer'>{props.data.footer}</p>
      <div className='cogs-image-container'>
        <CogsImg className='cogs-image'/>
      </div>
    </div>
  )
}


export default class About extends Component {
  render() {
    return(
      <div className='about-wrapper flex-wrapper'>
        <div className='about-container width-limiter-container'>
          <TextComponent data={this.props.Data.section1}/>
          <TextComponent data={this.props.Data.section2}/>
          <LearningComponent data={this.props.Data.learning}/>
          <Map/>
          <div className='page-highlight-caption'>
            <p className='body-text'>{this.props.Data.highlightCaption}</p>
          </div>
        </div>
      </div>
    )
  }
}
