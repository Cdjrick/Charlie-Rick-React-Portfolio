import React from "react";
import './project.css'

import pwGenImg from '../../assets/images/pwGenImg.png'
import noteTakerImg from '../../assets/images/noteTakerImg.png'
import furFoodzImg from '../../assets/images/furFoodzImg.png'
import noSqlImg from '../../assets/images/noSqlImg.png'
import githubIcon from '../../assets/images/icons/github-logo-32px.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap'

const Project = () => {

    const projects = [
        {
            image: `${pwGenImg}`,
            title: 'JavaScript Password Generator',
            deployed: 'No Deployment',
            github: 'https://github.com/Cdjrick/Charlie-Rick-Password-Generator'
        },
        {
            image: `${noteTakerImg}`,
            title: 'Express.js Note Taker',
            deployed: 'https://charlienotetaker.herokuapp.com',
            github: 'https://github.com/Cdjrick/charlie-rick-note-taker'
        },
        {
            image: `${furFoodzImg}`,
            title: 'furFoodz Full Stack Project',
            deployed: 'https://furfoodz.herokuapp.com/',
            github: 'https://github.com/jackloveday-git/FurFoodz'
        },
        {
            image: `${noSqlImg}`,
            title: 'NoSql Social Network API',
            deployed: 'No Deployment',
            github: 'https://github.com/Cdjrick/Charlie-Rick-NoSql-Database'
        }
    ]

    return (
        <>
            <div>
                <h3>Portfolio</h3>
            </div>
                {projects.map(project =>
                    (
                        <Col xs={12} lg={6}>
                            <div className='card mt-3 mb-3'>
                                <div className='imgContainer'>
                                    <img className='projectImg card-img-top' src={project.image} alt={project.title + ' image'}/>
                                    <a href={project.github}><img className='githubIcon' src={githubIcon} alt='Github Icon'/></a>
                                </div>
                                <div className='card-body'>
                                    <h5 className='card-title'>{project.title}</h5>
                                    
                                    <a className='deployedLink' href={project.deployed}><p className='card-text'>{project.deployed}</p></a>
                                </div>
                            </div>
                        </Col>
                    )
                )}
        </>
    )
}

export default Project