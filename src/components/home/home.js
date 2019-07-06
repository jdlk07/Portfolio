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

function Home() {
  return(
    <div className='home-wrapper'>
      <Intro Data={Data.Intro}/>
      <Process Data={Data.Process}/>
      <About Data={Data.About}/>
      <Banner Data={Data.MobileFirst}/>
      <ServicesAndTech Data={Data.ServicesAndTech}/>
      <Banner Data={Data.FirstImpressions}/>
      <Contact Data={Data.Contact}/>
      <Footer Data={Data.Footer}/>
    </div>
  )
}

export default Home
