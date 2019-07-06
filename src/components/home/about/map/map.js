import React, { Component } from 'react'

import { ReactComponent as MapImg } from './map.svg'
import { ReactComponent as PlaneImg } from './plane.svg'

export default class Map extends Component {
  render() {
    return(
      <div className='map-wrapper'>
        <div className='images-container'>
          <MapImg className='map-svg'/>
          <PlaneImg className='plane-svg'/>
        </div>
        <div className='text-container'>
          <p className='stats-text'>Countries: <span>62</span></p>
          <p className='stats-text'>Cities: <span>95</span></p>
        </div>
      </div>
    )
  }
}
