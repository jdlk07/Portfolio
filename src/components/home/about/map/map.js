import React, { Component } from 'react'
import { TimelineLite } from 'gsap/all'
import VisibilitySensor from 'react-visibility-sensor'

import { ReactComponent as MapImg } from './map.svg'
import { ReactComponent as PlaneImg } from './plane.svg'

export default class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      viewed: false,
      countriesCount: 20, //62
      citiesCount: 30  //95
    }

    this.visibilityHandler = this.visibilityHandler.bind(this)
    
    this.wrapper = null
    this.countriesCount = 20
    this.citiesCount = 30
  }

  visibilityHandler(isVisible) {
    if (isVisible) {
      this.setState({
       visible: true,
       viewed: true
      })
    }


  }

  componentDidMount() {
    this.myTween = new TimelineLite({ paused: true })
      .fromTo(this.wrapper, 1, {opacity: 0, y: '5%'}, {opacity: 1, y: '0%', ease: 'Power2.easeOut'})
      .to(this, 5, {
        countriesCount: '62',
        onUpdate: () => this.setState({countriesCount: this.countriesCount}),
        roundProps: 'countriesCount',
        ease: 'Power2.easeOut',
      })
      .to(this, 7, {
        citiesCount: '95',
        onUpdate: () => this.setState({citiesCount: this.citiesCount}),
        roundProps: 'citiesCount',
        ease: 'Power2.easeOut',
        delay: -5
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.visible !== this.state.visible && this.state.visible) {
      this.myTween.play()
    }
  }

  render() {
    return(
      <VisibilitySensor onChange={this.visibilityHandler} partialVisibility minTopValue={300} active={!this.state.viewed}>
        <div className='map-wrapper' ref={elem => this.wrapper = elem}>
          <div className='images-container'>
            <MapImg className='map-svg'/>
            <div className='plane-orbit'>
              <PlaneImg className='plane-svg'/>
            </div>
          </div>
          <div className='text-container'>
            <p className='stats-text'>Countries: <span>{this.state.countriesCount}</span></p>
            <p className='stats-text'>Cities: <span>{this.state.citiesCount}</span></p>
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}
