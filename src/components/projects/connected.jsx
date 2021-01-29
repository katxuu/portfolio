import React, { Component } from 'react'
import FigmaEmbed from 'react-figma-embed'

export default class Connected extends Component {
  render () {
    return (
      <div>
        {/* top bar */}
        <div className="top-bar">
          <h1>Connected</h1>
          <p><a href="home">Home </a><a href="portfolio">/ Portfolio</a> / connected </p>
        </div>


        <div className="container main-container">
        <h3 className="uppercase container mainYellow">Fall 2020 | UX Researcher and Designer </h3>
        <h4 className="container">Product Description</h4>
        <p className="container">ConnectEd is a mobile application designed to help  busy parents of K-5 students find capable academic tutors safely and easily, especially in times COVID. We support academic growth by providing an all-encompassing system to connect parents, students, and tutors virtually.</p>
          <div className="col-md-6">

            <h4>Problem Statement</h4>
            <ol>1. How can we address busy parents suddenly needing to stay at home with their children during the pandemic?</ol>
            <ol> 2. What are the pain points of having to self-educate their elementary-schoolers? </ol>
            <ol> 3. What can we offer that other tutoring services can't?</ol>
            </div>
          <div className="col-md-6">
            <h4>Team</h4>
            <p>Rachel Lawlor, Rrachel Becker, Julie Palmer, Joshua Green</p>
            <h4>Tools</h4>
            <p>Figma (prototyping), Miro (user journeys), Canva, Photoshop</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            </div>
            <p>&nbsp;</p>
            <div align="center">
            <div className="col-md-6">
            <img src="/images/connected/signin.png" className="img-responsive" width="300" alt="" />
            </div>
            <div className="col-md-6">
            <img src="/images/connected/search.png" className="img-responsive" width="300" alt="" />
            </div>
            </div>

            {/*timeline*/}

            <h2 align="center">. . .</h2>
            <h1 className="uppercase" align="center">Timeline</h1>
            <img src="/images/connected/timeline_connect.jpeg" className="img-responsive" alt="" />

            {/*methodology*/}

            <div align="center">

            <div>
            <h2>. . .</h2>
            <h1 className="uppercase">Methodology</h1>

            {/*cost benefit analysis*/}
            <h3 className="mainYellow">1. Interviews</h3>
            <p className="italics">Interviewed people from our design's target domain: parents of elementary schoolers. Developed standardized interview protocol so our team's individual, virtual interviews would be guided in similar way. We then analyzed interviews, grouping quotes into different themes and categories that relate to our tutoring platform solution. </p>
            <p>&nbsp;</p>
            </div>

            {/*cost benefit analysis*/}
            <h3 className="mainYellow">2. Personas & Scenarios</h3>
            <p className="italics">The content within these analyses was drawn from user interviews. Personas represent sample users of our design, including a wide range of user needs, motivations, skill levels, etc. Scenarios show different circumstances in which users might appreciate our solution. These keep us grounded so we make minimal assumptions about who our users are.</p>
            <p>&nbsp;</p>

            {/*cost benefit analysis*/}
            <div className="col-md-8">
            <img src="/images/connected/Henry.png" className="img-responsive" alt="" />
            </div>
            <div className="col-md-4">
            <img src="/images/connected/henry_scene.png" className="img-responsive" alt="" />
            </div>

            {/*cost benefit analysis*/}
            <p>&nbsp;</p>
            <div className="col-md-8">
            <img src="/images/connected/Sam.jpeg" className="img-responsive" alt="" />
            </div>
            <div className="col-md-4">
            <img src="/images/connected/sam_scene.png" className="img-responsive" alt="" />
            </div>
            {/*cost benefit analysis*/}
            <p>&nbsp;</p>
            <div className="col-md-8">
            <img src="/images/connected/Wendy.jpeg" className="img-responsive" alt="" />
            </div>
            <div className="col-md-4">
            <img src="/images/connected/wendy_scene.png" className="img-responsive" alt="" />
            </div>


            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>

            <h3 className="mainYellow">3. Sketches</h3>
            <p className="italics">Each member created 32 sketches. Together, the sketches covered 1-2 of our team's scenarios (setting, user, goals, actions, events). This activity is inteded to prioritize quantity rather than quality, and focusing on new (even outlandish) ideas.</p>
            <div className="col-md-6">
            <img src="/images/connected/sketch1.png" className="img-responsive" alt=""/>
            </div>
            <div className="col-md-6">
            <img src="/images/connected/sketch2.png" className="img-responsive" alt=""/>
            </div>
            <p>&nbsp;</p>

            <h3 className="mainYellow">4. User Flow</h3>
            <p className="italics">Created a visual mapping of the various flows our users will take through our application. Started with inforamtion architecture planning, added interactions, then considered the flow betweeen differrent screens / panels, and different paths users might take.</p>
            <p>&nbsp;</p>
            <h4>A. Start of Process</h4>
            <img src="/images/connected/start.png" className="img-responsive" alt=""/>
            <p>&nbsp;</p>
            <h4>B. Iterations</h4>
            <img src="/images/connected/process.png" className="img-responsive" alt=""/>
            <p>&nbsp;</p>
            <h4>C. Final User Flow</h4>
            <img src="/images/connected/final_flow.png" className="img-responsive" alt=""/>

            <h3 className="mainYellow">5. Paper Prototype</h3>
            <p className="italics">Each member created a different aspect of the overall user flow. I created the tutor review interactions and screens. This prototype was cut, drawn, and flowed on paper.</p>
            <video width="400" controls autoPlay loop muted>
              <source src="/images/connected/paper.mp4" type="video/mp4">
              </source>
            </video>
            <p>&nbsp;</p>

            <h3 className="mainYellow">6. Digital Prototype</h3>
            <p className="italics">After wireframing our page elements into a cohesive design, we translated our prototype so far into the first version of an interactive digital prototype. At this stage, some design, structure, flow, and content elements were not finalized. </p>
            <p>&nbsp;</p>
            <video controls autoPlay loop muted width="850">
              <source src="/images/connected/digital.mp4" type="video/mp4">
              </source>
            </video>
            <p>&nbsp;</p>

            <h3 className="mainYellow">7. Final Interactive Prototype</h3>
            <p className="italics">After usability testing our v1 of digital prototype and finalizing a coherent theme, we created our final interactive prototype. This walks through 5 major steps: (1) sign-in / sign-up (2) profile page (3) search for tutors (4) schedule tutoring sessions and (5) review tutors </p>
            <p>&nbsp;</p>
            <video controls autoPlay loop muted width="850">
              <source src="/images/connected/final.mp4" type="video/mp4">
              </source>
            </video>
            <p>&nbsp;</p>

            <h3 className="mainYellow">7A. Interact with Final Prototype Below!</h3>
            <p className="italics">*disclaimer* This project was my first time extensively using Figma, so I apologize in advance for any bugs / poor usability issues! Open to feedback as well! (: </p>
            <p>&nbsp;</p>
            <FigmaEmbed url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FobWqYPpxrOTl0ZsGzCDMge%2F482-final-prototype%3Fnode-id%3D1%253A24%26scaling%3Dscale-down" width="850"/>
            <p>&nbsp;</p>

            </div>


            </div>
            </div>



    );
  }
}
