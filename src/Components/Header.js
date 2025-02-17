import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const arputBlog = this.props.data.arputBlog;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home" >
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap" >
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                خانه
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                درباره ما
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                 رزومه تیم
              </a>
            </li>
            <li>
              <a className="" href="#resume">
                ویدئو بلاگ
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                نمونه کارها
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                تماس با ما
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>پروژه ها
                </a>
                <a href={arputBlog} className="button btn github-btn">
                  <i className="fa fa-flag"></i>بلاگ آرپوت
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
