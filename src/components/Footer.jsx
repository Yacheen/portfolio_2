import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='footer-links'>
                <h2>Yassin's Portfolio</h2>

                <div className='link'>
                    Github
                <GitHubIcon fontSize='large' color='primary' />

                </div>
            </div>
            <p>© Copyright 2022 Yassin </p>
        </div>
    </div>
  )
}
export default Footer;
