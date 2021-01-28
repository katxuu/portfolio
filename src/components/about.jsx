import React, { Component } from 'react'

export default class About extends Component {
  render () {
    return (
      <div>
        {/* top bar */}
        <div className="top-bar">
          <h1>About Me</h1>
          <p><a href="home">Home</a> / About me</p>
        </div>
        {/* end top bar */}
        <div className="container main-container clearfix">
          <div className="col-md-6">
            <img src="images/profile_pic.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-md-6">
            <h3 className="uppercase">Introduction </h3>
            <h5></h5>

            <p>Having grown up in a small-ish town called Canton, Michigan, I never envisioned myself exploring the creative crevices between traditional business and a growing-in-popularity user experience design. Going into college, I had never heard of any professions outside of the conventional careers: engineering and doctors and the vague generalities of being a “businessperson”. </p>

            <p>I liked to create and to daydream, but didn’t know how to tie these energies together into something tangible. Through finding the majors I did, having conversations with people in a wide variety of industries, and doing my fair share of flip-flopping between different career paths, I have found my home in a nice little burrow where creativity intersects with business, technology, and information. </p>

            </div>
            <h3 className="uppercase container"> </h3>
            <h3 className="uppercase container">Education</h3>
              <p className = "container">Currently I am a senior at the University of Michigan pursuing a dual degree between the Ross School of Business and the School of Information’s UX Design track. I am so, so, so excited to be in both of these schools because they allow me to explore my passions further through activity based learning, teamwork, and a cohort of similarly driven individuals who challenge me to do better with each assignment and project. </p>

              <p className = "container">Through the School of Information, I have been able to learn the technical skills needed to execute and evaluate my ideas. Through Ross, I have been able to learn essential presentation and problem solving frameworks needed to understand and build for stakeholder needs. Both of these schools have taught me the importance of empathy, as no good product, service, or homework assignment will succeed without a thorough grasp of user pain points, needs, and goals. </p>

              <h3 className="uppercase container">Hopes and Aspirations</h3>
                <p className = "container">There’s a lot of things I want to do with my life: I want to skydive. I want to learn a European language fluently. I want to learn how to salsa dance. I want to attend a silent meditation retreat. I want to start a company that helps create equal opportunities in education, healthcare, and living standards. Most importantly, above all, I want to never stop learning; I want to never stop making mistakes that show me there is still room to grow. </p>

                <div className="h-10"></div>
                <ul className="social-ul">
                  <li className="box-social"><a href="#0"><i className="ion-social-instagram-outline"></i></a></li>
                  <li className="box-social"><a href="https://www.linkedin.com/in/katiexuu/"><i className="ion-social-linkedin"></i></a></li>
                  <li className="box-social"><a href="https://www.youtube.com/channel/UCw0u7AbERXHQi8NjnpvXeYQ"><i className="ion-social-youtube"></i></a></li>
                  </ul>


              </div>


            </div>

    );
  }
}
