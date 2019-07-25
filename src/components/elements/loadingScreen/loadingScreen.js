import React, { Component } from 'react'
import { TimelineLite } from 'gsap/all'

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }

    this.wrapper = null

  }


  componentDidMount() {
    // const tiles = this.shuffle(this.tiles)
    // const [list1, list2] = this.arraySplitter(tiles)
    this.myTween = new TimelineLite({ paused: true })
      .to(this.wrapper, 0.5, {autoAlpha: 0, ease: 'Power1.easeOut'})

    //  setTimeout(() => this.setState({ visible: false}), 3000) 
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading && !this.props.loading) {
      this.myTween.play()
    }
  }

  render() {
    return(
      <div className='loading-screen-wrapper' ref={elem => this.wrapper = elem}>
        {/* {Array(3).fill().map((_, index) => (
          <div className='loading-spinner'></div>
        ))} */}
      </div>
    )
  }
}