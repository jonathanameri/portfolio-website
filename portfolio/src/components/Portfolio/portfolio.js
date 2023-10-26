import React from "react";
import './portfolio.css';
import project1Image from '../../assets/project1.JPG';
import project2Image from '../../assets/project2.JPG';

const projects = [
    {
        title: "UConn Marketplace",
        image: project1Image,
        description: "I'm currently working on a UConn Marketplace app as part of my portfolio project. This app, developed in React Native, is designed to resemble a blend of Facebook Marketplace and Craigslist. It serves UConn students and requires them to sign up for the service, with user validation done through UConn's CAS service to confirm their student status. This project aims to provide a convenient and trusted platform for students to buy and sell items within the UConn community. It's an exciting endeavor that combines my coding skills with the practical needs of my fellow students at the University of Connecticut.",
        link: "https://project1-demo.com"
    },
    {
        title: "Project 2",
        image: project2Image,
        description: "A description of Project 2.",
        link: "https://project2-demo.com"
    },
    // Add more project objects as needed
];

const Portfolio = () => {
    return (
        <section className={'portfolio'}>
            <h2 className={'portfolioTitle'}>My Projects</h2>
            <p className={'portfolioDescription'}>Here are some of the projects I've worked on recently.</p>
            <div className={'projectList'}>
                {projects.map((project, index) => (
                    <div className={'projectItem'} key={index}>
                        <h3 className={'projectTitle'}>{project.title}</h3>
                        <div className={'projectContent'}>
                            <img src={project.image} alt={project.title} className={'projectImage'} />
                            <div className={'projectInfo'}>
                                <p className={'projectDescription'}>{project.description}</p>
                                <a className={'projectLink'} href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
