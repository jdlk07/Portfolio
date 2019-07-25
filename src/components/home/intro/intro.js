import React, { Component } from 'react'
import { TimelineLite } from 'gsap/all'

import ScrollIcon from './../../elements/scrollIcon/scrollIcon'

// import * as ScrollMagic from 'scrollmagic'
// // import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

// ScrollMagicPluginGsap(ScrollMagic, TimelineLite);


// export default class Intro extends Component {
//   constructor(props) {
//     super(props)


//     this.textContainer = null
//     this.readMoreBtn = null
//     this.bodyText2 = null
//     this.bodyText3 = null
//     this.heroContainer = null
//     this.heroImage = null
//     this.scrollIcon = null
    
//     this.heroWrapper = null

//     this.controller = new ScrollMagic.Controller()
//     this.myTween = null

//   }

//   componentDidMount() {
//     this.myTween = new TimelineLite({paused: true, onComplete: this.animationCompleteHandler })
//       .to(this.heroContainer, 0.8, {height: '70%', marginRight: '20%', delay: -0.5, ease: 'Power4.easeInOut'})
//       .to(this.heroImage, 0.8, {scale: '1.2', x: '6%', delay: -0.8, ease: 'Power4.easeInOut'})
//       .to(this.textContainer, 0.8 ,{scale: 1, delay: -0.8, ease: 'Power4.easeInOut'})
//       .to(this.readMoreBtn, 0.5, {opacity: 0, y: '-100%', cursor: 'none', delay: -0.5, ease: 'Power1.easeOut'})
//       .to(this.textContainer, 0.5 ,{y: 0,delay: -0.2 ,ease: 'Power3.easeOut'})
//       .to(this.bodyText2, 0.5, {opacity: 1, y: 0, delay: -0.5, ease: 'Power2.easeOut'})
//       .to(this.bodyText3, 0.5, {opacity: 1, y: 0, delay: -0.5, ease: 'Power2.easeOut'})

//     new ScrollMagic.Scene({
//       duration: 600,
//     })
//       .setTween(this.myTween)
//       .setPin(this.heroWrapper)
//       .addIndicators({name: 'first scroll magic'})
//       .addTo(this.controller)

//   }   

//   render() {
//     return(
//       <div id='intro-wrapper' className='intro-wrapper' ref={elem => this.heroWrapper = elem}>
//         <div className='content-container'>
//           <div className='text-container' ref={elem => this.textContainer = elem}>
//             <div className='process-container'>
//               <div className='text-wrapper'>
//                 <p>{this.props.Data.process[0]}</p>
//                 <span className='dot'></span>
//                 <p>{this.props.Data.process[1]}</p>
//                 <span className='dot'></span>
//                 <p>{this.props.Data.process[2]}</p>
//               </div>
//               <hr/>
//             </div>
//             <div className='headers-container'>
//               <h2 className='header-1'>{this.props.Data.header1}</h2>
//               <h2 className='header-2'>{this.props.Data.header2}</h2>
//               <h2 className='header-3'>{this.props.Data.header3}</h2>
//             </div>
//             <div id='body-container' className='body-container'>
//               <p className='body-text body-text-1'>{this.props.Data.paragraph1}</p>
//               <a className='read-more-btn' ref={elem => this.readMoreBtn = elem}>Read More</a>
//               <p className='body-text body-text-2' ref={elem => this.bodyText2 = elem}>{this.props.Data.paragraph2}</p>
//               <p className='body-text body-text-3' ref={elem => this.bodyText3 = elem}>{this.props.Data.paragraph3}</p>
//             </div>
//           </div>
//         </div>
//         <div className='hero-image-wrapper'>
//           <div id='hero-image-container' className='hero-image-container' ref={elem => this.heroContainer = elem}>
//             <img className='hero-image' src={this.props.Data.heroImg} ref={elem => this.heroImage = elem}/>
//             <p className='hero-image-caption'>{this.props.Data.imageCaption}</p>
//           </div>
//         </div>
//         <ScrollIcon ref={elem => this.scrollIcon = elem}/>
//       </div>
//     )
//   }
// }

const HeroImage = React.forwardRef((props, ref) => {
  const { ref1, ref2 } = ref
  if (!props.isMobile) {
    return (
      <div className='hero-image-wrapper'>
        <div className='hero-image-container' ref={ref1}>
          <img className='hero-image' src={props.Data.heroImg} ref={ref2} alt='Me!' onLoad={props.onLoadHandler}/>
          <p className='hero-image-caption'>{props.Data.imageCaption}</p>
        </div>
      </div>
    )
  }
})

const MobileHeroImage = React.forwardRef((props, ref) => {
  const { ref1, ref2 } = ref
  if (props.isMobile) {
    return (
      <div className='mobile-hero-image-wrapper' ref={ref1}>
        <img className='mobile-hero-image' src={props.Data.heroImg} alt='Me!' onLoad={props.onLoadHandler} ref={ref2}/>
      </div>
    )
  }
  
})

export default class Intro extends Component {
  constructor(props) {
    super(props)
// 
    this.state = {
      expand: false
    }
    // 
    this.wrapper = null
    this.textContainer = null
    this.readMoreBtn = null
    this.bodyText2 = null
    this.bodyText3 = null
    this.heroContainer = React.createRef()
    this.heroImage = React.createRef()
    this.MobileHeroContainer = React.createRef()
    this.MobileHeroImage = React.createRef()
    this.scrollIcon = null
// 
    this.myTween = null
// 
    this.onLoadHandler = this.onLoadHandler.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.animationCompleteHandler = this.animationCompleteHandler.bind(this)
  }
// 
  scrollHandler(event) {
    if (window.pageYOffset === 0) {
      if (event.nativeEvent.wheelDelta > 0 && this.state.expand) {
        this.setState({expand: !this.state.expand})
      } else if (event.nativeEvent.wheelDelta < 0 && !this.state.expand) {
        this.setState({expand: !this.state.expand})
      }
    }
  }

  //Call the onloadHandler once the hero image is loaded. Initiates the Loading screen to begin exit animation and home page enter animation.
  onLoadHandler() {
    this.props.onLoadHandler()
    this.onLoadTween.play()
  }

// 
  clickHandler() {
    this.setState({ expand: true })
  }
// 
  //Unlock scroll after animation is complete and intro is expanded.
  animationCompleteHandler() {
    if (this.state.expand) {
      document.body.style.overflow = ''
    }
  }
// 
  componentDidMount() {
    //Animation to play once image is loaded and loading screen is being hidden.
    this.onLoadTween = new TimelineLite({ paused: true })
      .fromTo(this.wrapper, 0.5, { scale: 1.2 }, { scale: 1 })

    this.myTween = new TimelineLite({paused: true, onComplete: this.animationCompleteHandler })
      .to(this.scrollIcon, 0.5, {opacity: 0, ease: 'Power1.easeOut'})
      .to(this.heroContainer, 0.8, {height: '70%', marginRight: '20%', delay: -0.5, ease: 'Power4.easeInOut'})
      .to(this.heroImage, 0.8, {scale: '1.2', x: '6%', delay: -0.8, ease: 'Power4.easeInOut'})
      .to(this.textContainer, 0.8 ,{scale: 1, delay: -0.8, ease: 'Power4.easeInOut'})
      .to(this.readMoreBtn, 0.5, {opacity: 0, y: '-100%', cursor: 'none', delay: -0.5, ease: 'Power1.easeOut'})
      .to(this.textContainer, 0.5 ,{y: 0, ease: 'Power3.easeOut'})
      .to(this.bodyText2, 0.5, {opacity: 1, y: 0, delay: -0.5, ease: 'Power2.easeOut'})
      .to(this.bodyText3, 0.5, {opacity: 1, y: 0, delay: -0.5, ease: 'Power2.easeOut'})
      .to(this.scrollIcon, 0.5, {opacity: 1, ease: 'Power1.easeIn'})
    
      //Locks scrolling on load / update if at the top of the page.
      if (window.pageYOffset === 0) {
        document.body.style.overflow = 'hidden'
      } else {
        this.setState({expand: true})
      }
//Locks scrolling and changes expand state back to false when the top of the page is reached.
      window.onscroll = () => {
        if (window.pageYOffset === 0) {
          document.body.style.overflow = 'hidden'
          this.setState({expand: false})
        }
      }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.expand !== this.state.expand && this.state.expand) {
      this.myTween.play()
    } else if (prevState.expand !== this.state.expand && !this.state.expand ) {
      this.myTween.reverse()
    }
  }
  render() {
    if (this.props.isMobile) {
      document.body.style.overflow = ''
      this.myTween.play()
    }
    return(
      <div className='intro-wrapper' onWheel={this.scrollHandler} ref={elem => this.wrapper = elem}>
        <div className='content-container'>
          <div className='text-container' ref={elem => this.textContainer = elem}>
            <div className='process-container'>
              <div className='text-wrapper'>
                <p>{this.props.Data.process[0]}</p>
                <span className='dot'></span>
                <p>{this.props.Data.process[1]}</p>
                <span className='dot'></span>
                <p>{this.props.Data.process[2]}</p>
              </div>
              <hr/>
            </div>
            <div className='headers-container'>
              <h2 className='header-1'>{this.props.Data.header1}</h2>
              <h2 className='header-2'>{this.props.Data.header2}</h2>
              <h2 className='header-3'>{this.props.Data.header3}</h2>
            </div>
            <div className='body-container'>
              <p className='body-text body-text-1'>{this.props.Data.paragraph1}</p>
              <button className='read-more-btn' onClick={this.clickHandler} ref={elem => this.readMoreBtn = elem}>Read More</button>
              <MobileHeroImage Data={this.props.Data} ref={{ ref1: elem => this.MobileHeroContainer =elem, ref2: elem => this.MobileHeroImage = elem }} onLoadHandler={this.onLoadHandler} isMobile={this.props.isMobile}/>
              <p className='body-text body-text-2' ref={elem => this.bodyText2 = elem}>{this.props.Data.paragraph2}</p>
              <p className='body-text body-text-3' ref={elem => this.bodyText3 = elem}>{this.props.Data.paragraph3}</p>
            </div>
          </div>
        </div>
        <HeroImage Data={this.props.Data} ref={{ ref1: elem => this.heroContainer =elem, ref2: elem => this.heroImage = elem }} onLoadHandler={this.onLoadHandler} isMobile={this.props.isMobile}/>
        <ScrollIcon ref={elem => this.scrollIcon = elem}/>
      </div>
    )
  }
}
// 