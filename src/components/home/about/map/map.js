import React, { Component } from 'react'
import { TweenMax } from 'gsap/all'
import VisibilitySensor from 'react-visibility-sensor'

import { ReactComponent as MapImg } from './map.svg'
import { ReactComponent as PlaneImg } from './plane.svg'

export default class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      viewed: false,
      countriesCount: 0, //62
      citiesCount: 0  //95
    }

    this.visibilityHandler = this.visibilityHandler.bind(this)

    this.countriesCount = 0
    this.citiesCount = 0
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
    if (this.state.visible) {
      TweenMax.to(this, 7, {
        countriesCount: '62',
        onUpdate: () => this.setState({countriesCount: this.countriesCount}),
        roundProps: 'countriesCount',
        ease: 'Power1.easeOut',
      })
      TweenMax.to(this, 9, {
        citiesCount: '95',
        onUpdate: () => this.setState({citiesCount: this.citiesCount}),
        roundProps: 'citiesCount',
        ease: 'Power1.easeOut',
      })
    }
  }

  render() {
    return(
      <VisibilitySensor onChange={this.visibilityHandler} partialVisibility minTopValue={300} active={!this.state.viewed}>
        <div className='map-wrapper'>
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
