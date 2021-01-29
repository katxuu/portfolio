import React, { Component } from 'react'

export default class Newsletter extends Component {
  render () {
    return (
      <div>
        {/* top bar */}
        <div className="top-bar">
          <h1>E-newsletter</h1>
          <p><a href="home">Home </a><a href="portfolio">/ Portfolio</a> / Newsletter </p>
        </div>


        <div className="container main-container">
        <h3 className="uppercase container mainYellow">Fall 2018 | Business Analyst </h3>
          <div className="col-md-6">

            <h4>Project Scope</h4>
            <ol>(a) Product idea generation – considering market, customer, and competitor landscape</ol>
            <ol>(b) Revenue and cost project for any feasible product ideas </ol>
            </div>
          <div className="col-md-6">
            <h4>Team</h4>
            <p>Rana Shahani (Project Manager), Adam Giacomelli, Nilay Kulkarni, Liam Clancy</p>
            <h4>Tools</h4>
            <p>Excel, Powerpoint</p>
            <p>&nbsp;</p>
            </div>

            {/*timeline*/}

            <h2 align="center">. . .</h2>
            <h1 className="uppercase" align="center">Timeline</h1>
            <img src="/images/newsletter/timeline_news.jpeg" className="img-responsive" alt="" />

            {/*methodology*/}

            <div align="center">

            <div>
            <h2>. . .</h2>
            <h1 className="uppercase">Methodology</h1>

            {/*cost benefit analysis*/}
            <h3 className="mainYellow">Competitive Analysis</h3>
            <p className="italics">Gave us an idea of what similar market alternatives to client were and weren’t offering, which allowed us to better ideate new product ideas to meet market expectations and create new venture opportunities</p>
            <div className="col-md-6">
            <img src="/images/newsletter/competition.png" className="img-responsive" alt=""/>
            </div>
            <div className="col-md-6">
            <img src="/images/newsletter/comp2.png" className="img-responsive" alt=""/>
            </div>
            <p>&nbsp;</p>
            </div>

            <h3 className="mainYellow">Student Surveys</h3>
            <p className="italics">Engaged with students at Michigan, a representative user group of client, to understand what their needs, pain points, and goals were in an e-newsletter</p>
            <p>&nbsp;</p>

            <h3 className="mainYellow">Market Sizing</h3>
            <p className="italics">Estimated size of each considered niche product by making assumptions on penetration rates, user base populations, stickiness factors, etc.</p>
            <img src="/images/newsletter/market_sizing.png" className="img-responsive" width="700" alt=""/>
            <p>&nbsp;</p>

            <h3 className="mainYellow">Pricing and Cost Analysis</h3>
            <p className="italics">Built financial model projecting market size and lifetime value (LTV) for each niche newsletter recommendation, including assumptions such as open rates, cost per impression (CPM), unsubscribe rates, customer acquisition costs (CAC), and revenue per customer</p>
            </div>

            {/*deliverable recommendations*/}

            <div align="center">
            <h2>. . .</h2>
            <h1 className="uppercase">Deliverable Recommendations</h1>
            <h3 className="mainYellow">(1) Recommended 3 niche newsletters</h3>
            <p>of which 2 relating to retail and technology have been implemented by client</p>

            </div>
            </div>
            </div>



    );
  }
}
