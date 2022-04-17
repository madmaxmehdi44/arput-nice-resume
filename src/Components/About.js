import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about" >
        <Fade duration={1000}>
          <div className="row">

            <div className="ten columns main-col">
              <h2>درباره ما</h2>

              <p>{bio}</p>
              <div className="row" >
              <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>دانلود رزومه
                    </a>
                  </p>
                </div>
                
                <div className="columns contact-details">
                  <h2>جزئیات تماس</h2>
                  <p className="address" >
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>

              </div>

              
            </div>
            <div className="two columns" >
              <img
                className="profile-pic"
                src={profilepic}
                alt="ARPut"
              />
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
