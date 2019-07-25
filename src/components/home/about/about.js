import React, { Component } from 'react'

import TextComponent from '../../elements/textComponent/textComponent'
import Map from './map/map'
import LearningComponent from './learningComponent/learningComponent'
import BannerCaption from './bannerCaption/bannerCaption'

const AboutSection = (props) => {
  if (props.isMobile) {
    return (
      <div className='about-container width-limiter-container'>
        <TextComponent data={props.Data.section1}/>
        <Map/>
        <BannerCaption Data={props.Data}/>
        <TextComponent data={props.Data.section2}/>
        <LearningComponent data={props.Data.learning}/>
      </div>
    )
  } else {
    return (
      <div className='about-container width-limiter-container'>
        <TextComponent data={props.Data.section1}/>
        <TextComponent data={props.Data.section2}/>
        <LearningComponent data={props.Data.learning}/>
        <Map/>
        <BannerCaption Data={props.Data}/>
      </div>

    )
  }
}

export default class About extends Component {

  render() {
    return(
      <div className='about-wrapper flex-wrapper'>
        <AboutSection Data={this.props.Data} isMobile={this.props.isMobile}/>
      </div>
    )
  }
}
