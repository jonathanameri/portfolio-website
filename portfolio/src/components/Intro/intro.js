import React from "react";
import './intro.css';
import headshotImg from '../../assets/headshot.png';
import scrollDownIcon from '../../assets/scroll-down.png';
import { Link } from "react-scroll";


const Intro = () => {
    return (
        <section className={'intro'}>
            <div className={'introText'}>
                <h1 className={'hello'}>Hey, I'm Jonathan Ameri</h1> <br/>
                <p className={'introDescription'}>Computer Science and Engineering student. Currently I am working as a full stack software developer at the <a className={'link'} href={'https://dxgroup.core.uconn.edu/'} target={'_blank'} rel={'noopener noreferrer'}>Digital Experience Group</a></p>
            </div>
            <img className={'introImg'} src={headshotImg} alt={'headshot'} />
            <img className={'scrollDownIcon'} src={scrollDownIcon} alt={'scroll down'} />
            <div className={'socials'}>
                <div className={'socialsItem'}>
                    <a className={'socialsLink'} href={'https://www.linkedin.com/in/jonathan-ameri/'} target={'_blank'} rel={'noreferrer'}>
                        <img className={'socialsIcon'} src={'https://img.icons8.com/fluent/48/000000/linkedin.png'} alt={'linkedin'} />
                    </a>
                </div>
                <div className={'socialsItem'}>
                    <a className={'socialsLink'} href={'https://github.com/jonathanameri'} target={'_blank'} rel={'noreferrer'}>
                        <img className={'socialsIcon'} src={'https://img.icons8.com/fluent/48/000000/github.png'} alt={'github'} />
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Intro;
