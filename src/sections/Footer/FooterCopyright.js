import React from 'react'
import PropTypes from 'prop-types'

const FooterCopyright = props => {
  const date = new Date().getFullYear();

  return (
    <div className='FooterCopyright'>© Copyright {date}. All rights reserved. </div>
  )
}

FooterCopyright.propTypes = {}

export default FooterCopyright