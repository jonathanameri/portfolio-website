import React from "react";
import './about.css';

const About = () => {
    const skills = ['HTML', 'JavaScript', 'React', 'Vue.js', 'Git', 'C', 'C++', 'Python', 'SQL', 'Java', 'PHP', 'Laravel', 'Ubuntu', 'CSS', 'Docker'];

    return (
        <section className={'about'}>
            <div className={'aboutText'}>
                <h2 className={'aboutTitle'}>About Me</h2>
            </div>
            <div className={'aboutContent'}>
                <div className={'aboutContentMain'}>
                    <h3 className={'aboutContentTitle'}>Who am I?</h3>
                    <p className={'aboutContentText'}>I'm a <b>Computer Science and Engineering</b> student with a strong passion for coding. I enjoy working on my personal projects and am currently dedicating my skills to projects for the Digital Experience Group. With a focus on web development and problem-solving, I aim to create innovative solutions that enhance user experiences.</p>
                    <p className={'aboutContentText'}>In addition to my academic pursuits, I'm an avid coder who loves tackling coding challenges and crafting my own projects. I believe in the power of hands-on experience to continually enhance my skills. If you have an opportunity that aligns with my interests and skills, feel free to reach out. I'm always eager to explore new coding adventures and contribute to exciting projects.</p>
                </div>
                <div className={'aboutContentSkills'}>
                    <h3 className={'aboutContentTitle'}>My Skills</h3>
                    <div className={'aboutContentSkillsList'}>
                        {skills.map((skill, index) => (
                            <div className={'aboutContentSkillsListItem'} key={index}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;