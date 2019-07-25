import React from 'react'

import './home.scss'

import * as Data from './Data'

import Intro from './intro/intro'
import Process from './process/process'
import About from './about/about'
import Banner from './../elements/bannerComponent/bannerComponent'
import ServicesAndTech from './servicesAndTech/servicesAndTech'
import Contact from './contact/contact'
import Footer from './footer/footer'

function Home(props) {
  return(
    <div className='home-wrapper'>
      <Intro Data={Data.Intro} onLoadHandler={props.onLoadHandler} isMobile={props.isMobile}/>
      <Process Data={Data.Process}/>
      <About Data={Data.About} isMobile={props.isMobile}/>
      <Banner Data={Data.MobileFirst}/>
      <ServicesAndTech Data={Data.ServicesAndTech}/>
      <Banner Data={Data.FirstImpressions}/>
      <Contact Data={Data.Contact}/>
      <Footer Data={Data.Footer}/>
    </div>
  )
}

export default Home

// $(function(){	

//   var $window = $(window);
// var scrollTime = 1.2;
// var scrollDistance = 170;

// $window.on("mousewheel DOMMouseScroll", function(event){

// event.preventDefault();	

// var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
// var scrollTop = $window.scrollTop();
// var finalScroll = scrollTop - parseInt(delta*scrollDistance);

// TweenMax.to($window, scrollTime, {
// scrollTo : { y: finalScroll, autoKill:true },
//   ease: Power1.easeOut,
//   overwrite: 5							
// });

// });
// });