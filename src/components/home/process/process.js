import React, { Component } from 'react'

import { ReactComponent as DesignIcon } from './media/designIcon.svg'
import { ReactComponent as CreateIcon } from './media/createIcon.svg'
import { ReactComponent as DeployIcon } from './media/deployIcon.svg'


export default class Process extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className='process-wrapper banner-wrapper'>
        <p className='body-text'>{this.props.Data.bodyText[0]}<span>{this.props.Data.bodyText[1]}</span>{this.props.Data.bodyText[2]}</p>
        <div className='animations-wrapper'>
          <div className='svg-container'>
            <DesignIcon/>
          </div>
          <div className='svg-container'>
            <CreateIcon/>
          </div>
          <div className='svg-container'>
            <DeployIcon/>
          </div>
        </div>
      </div>
    )
  }
}
