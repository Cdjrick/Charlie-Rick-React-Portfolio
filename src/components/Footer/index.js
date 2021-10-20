import React from 'react'
import './footer.css'
import githubLogo from '../../assets/images/icons/github-logo-64px.png'
import linkedInLogo from '../../assets/images/icons/linkedin-64px.png'

import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div className='footer text-center'>
            <a href='https://github.com/Cdjrick'>
                <img className='socialLink m-3' src={githubLogo} alt='Github Logo'></img>
            </a>
            
            <a href='https://www.linkedin.com/in/charlie-rick-499a9120/'>
                <img className='socialLink' src={linkedInLogo} alt='LinkedIn Logo'></img>
            </a>
        </div>
    )
}

export default Footer