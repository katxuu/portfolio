import React, { Component } from 'react'

export default class Biscuits extends Component {
  render () {
    return (
      <div>
        {/* top bar */}
        <div className="top-bar">
          <h1>Beer City Dog Biscuits</h1>
          <p><a href="home">Home </a><a href="portfolio">/ Portfolio</a> / BCDB </p>
        </div>


        <div className="container main-container">
        <h3 className="uppercase container mainYellow">Winter 2019 | Project Manager </h3>
        <h4 className="container">Client Description</h4>
        <p className="container">BCDB is a 501(c)3 non-profit that aims to benefit developmentally disabled adults through their business model and hiring structure as well as donations of their proceeds. Through selling hand-made dog biscuits, BCDB is able to employ developmentally disabled adults as a message and action of empowerment to the disabled community. These employees are dubbed ‘Brew Bakers’.</p>
          <div className="col-md-6">

            <h4>Project Scope</h4>
            <ol>(a) Potential market entry analysis to help decide new geographical locations to sell in, considering market interest, retailer agreements, and logistical constraints</ol>
            <ol>(b) Given market entry potential, conduct operations analysis to better understand and maximize labor and facility capabilitiess </ol>
            <ol>(c) Social media campaign framework to spread awareness about unique value proposition and any new potential markets </ol>
            </div>
          <div className="col-md-6">
            <h4>Team</h4>
            <p>Amar Srinivasan (Senior Project Advisor), Ali Ahmed, Minnie Sun, Neena Baliga, Ryan Kellett</p>
            <h4>Tools</h4>
            <p>Tableau, Excel, Powerpoint</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            </div>
            <p>&nbsp;</p>
            <div align="center">
            <img src="/images/biscuits/bcdb_logo.png" className="img-responsive" width="200" alt="" />
            </div>

            {/*timeline*/}

            <h2 align="center">. . .</h2>
            <h1 className="uppercase" align="center">Timeline</h1>
            <img src="/images/biscuits/timeline_biscuit.png" className="img-responsive" alt="" />

            {/*methodology*/}

            <div align="center">

            <div>
            <h2>. . .</h2>
            <h1 className="uppercase">Methodology</h1>

            {/*cost benefit analysis*/}
            <h3 className="mainYellow">Operational Analysis</h3>
            <p className="italics">Understood current labor and facility capacities in order to reconfigure practices and spaces to be more effective and value centric</p>
            <img src="/images/biscuits/operations.png" className="img-responsive" width="700" alt=""/>
            <p>&nbsp;</p>
            </div>

            <h3 className="mainYellow">Competitive Analysis</h3>
            <p className="italics">Compared features of existing inventory management systems to realize building one in house for client is more cost effective and value additive</p>
            <p>&nbsp;</p>

            <h3 className="mainYellow">UX Research and Design</h3>
            <p className="italics">Engaged club members as representative customers to redesign website content and layout to gain clarity and conciseness in the overall mission</p>
            <img src="/images/biscuits/old_site.jpg" className="img-responsive" width="650" alt=""/>
            <p>&nbsp;</p>

            <h3 className="mainYellow">E-Commerce Strategy</h3>
            <p className="italics">Based on likes on client’s Instagram across factors such as time and caption length, we created a phased social media campaign to promote attention to brand and values</p>
            <img src="/images/biscuits/stats1.jpeg" className="img-responsive" width="700" alt=""/>
            <img src="/images/biscuits/stats2.jpeg" className="img-responsive" width="700" alt=""/>
            <img src="/images/biscuits/stats3.jpeg" className="img-responsive" width="650" alt=""/>
            </div>


            {/*deliverable recommendations*/}

            <div align="center">
            <h2>. . .</h2>
            <h1 className="uppercase">Deliverable Recommendations</h1>
            <h3 className="mainYellow">(1) Built inventory management system</h3>
            <p>from scratch in Excel, leading to immediate implementation by client</p>
            <img src="/images/biscuits/ims.jpeg" className="img-responsive" width="900" alt=""/>

            <h3 className="mainYellow">(2) Redesigned content and layout of client website</h3>
            <p>to induce more clarity – some elements improved upon were the mission statement, adding in a baking process chart, and making the entire site more shallow</p>
            <img src="/images/biscuits/new_site.jpeg" className="img-responsive" width="800" alt="" />

            <h3 className="mainYellow">(3) Designed progress tracking program for Brew Bakers</h3>
            <p>to ensure support and motivation for workers while inducing greater engagement with external stakeholders such as customers and donors</p>
            <img src="/images/biscuits/tracking_v2.png" className="img-responsive" width="700" alt=""/>

            <h3 className="mainYellow">(4) Created an e-commerce marketing strategy</h3>
            <p>across 3 social media platforms to cater to and inform multiple audiences about client's new online ordering capability</p>


            <h2>. . .</h2>
            <img src="/images/biscuits/bcdb_group.jpeg" className="img-responsive" width="800" alt=""/>

            </div>
            </div>
            </div>



    );
  }
}
