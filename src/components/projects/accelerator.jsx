import React, { Component } from 'react'

export default class Accelerator extends Component {
  render () {
    return (
      
      <div>
        {/* top bar */}
        <div className="top-bar">
          <h1>Ann-Arbor Accelerator</h1>
          <p><a href="home">Home </a><a href="portfolio">/ Portfolio</a> / Accelerator </p>
        </div>


        <div className="container main-container">
        <h3 className="uppercase container mainYellow">Winter 2018 | Business Analyst </h3>
          <div className="col-md-6">

            <h4>Project Scope</h4>
            <ol>(a) Evaluate Customer Relationship Management (CRM) softwares Zoho and SalesForce IQ to begin tracking post-accelerator cohort success</ol>
            <ol>(b) Increase Michigan student involvement </ol>
            </div>
          <div className="col-md-6">
            <h4>Team</h4>
            <p>Matthew Wei (Project Manager), Aditi Jajoo, Nickolas Panagakis, Ved Bhagwat</p>
            <h4>Tools</h4>
            <p>Zoho, SalesForce IQ, Excel, Powerpoint</p>
            <p>&nbsp;</p>
            </div>

            {/*timeline*/}

            <h2 align="center">. . .</h2>
            <h1 className="uppercase" align="center">Timeline</h1>
            <img src="/images/accelerator/timeline.jpeg" className="img-responsive" alt="" />

            {/*methodology*/}

            <div align="center">

            <div>
            <h2>. . .</h2>
            <h1 className="uppercase">Methodology</h1>

            {/*cost benefit analysis*/}
            <h3 className="mainYellow">Cost-Benefit Analysis</h3>
            <p className="italics">Helped us determine whether Zoho, SalesForceIQ, or another market alternative matched our clients’ needs for a CRM platform</p>
            <div className="col-md-6">
            <img src="/images/accelerator/comparison.png" className="img-responsive" alt=""/>
            </div>
            <div className="col-md-6">
            <img src="/images/accelerator/comparison2.png" className="img-responsive" alt=""/>
            </div>
            <p>&nbsp;</p>
            </div>

            <h3 className="mainYellow">Expert Calls</h3>
            <p className="italics">Made to on-campus student venture funds to gain best practices to create one for client as a way to increase student engagement</p>
            <p>&nbsp;</p>

            <h3 className="mainYellow">Market Sizing & Competitive Analysis</h3>
            <p className="italics">Allowed us to help client choose next batch of cohorts based on macroeconomic industry and microeconomic firm analysis</p>
            </div>

            {/*deliverable recommendations*/}

            <div align="center">
            <h2>. . .</h2>
            <h1 className="uppercase">Deliverable Recommendations</h1>
            <h3 className="mainYellow">(1) Chose Zoho as a CRM platform </h3>
            <img src="/images/accelerator/zoho_logo.png" className="img-responsive" width="200" alt=""/>
            <p>&nbsp;</p>
            <h3 className="mainYellow">(2) Developed tiered tracking metrics for post-accelerator companies</h3>
            <img src="/images/accelerator/metrics.png" className="img-responsive" width="600" alt=""/>
            <p>&nbsp;</p>
            <h3 className="mainYellow">(3) Created student fund guidelines</h3>
            <img src="/images/accelerator/fund.png" className="img-responsive" width="600" alt=""/>
            <p>&nbsp;</p>
            <h3 className="mainYellow">(4) Evaluated and ranked incoming 2018 cohort</h3>
            <img src="/images/accelerator/cohort.png" className="img-responsive" width="600" alt=""/>

            </div>
            </div>
            </div>



    );
  }
}
