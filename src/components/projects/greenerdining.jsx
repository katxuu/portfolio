import React, { Component } from 'react'

export default class GreenerDining extends Component {
  render () {
    return (
      <div>
        {/* top bar */}
        <div className="top-bar">
          <h1>Greener Dining</h1>
          <p><a href="home">Home </a><a href="portfolio">/ Portfolio</a> / Greener Dining </p>
        </div>


        <div className="container main-container">
        <h3 className="uppercase container mainYellow">Fall 2019 | Ross Integrated Semester (RIS) Winner </h3>
        <h4 className="container">RIS Description</h4>
        <p className="container">RIS is a semester-long, integrated entrepreneurial competition that the Ross School of Business hosts. Each BBA Junior class is required to partake, as the grade from RIS is weighted into each course's grade from that semester (Business Law, Technology & Operations, Business Communications, Behavioral Theory Management). The entrepreneurial venture competition has a different problem statement each year, and Juniors are randomly assigned into groups of 4-6 person teams to think of a scalable, implementable solution. </p>
          <div className="col-md-6">

            <h4>2019 Competition Problem Statement</h4>
            <p>Create a product or service that helps the University of Michigan Dining Halls reach carbon neutrality</p>
            </div>
          <div className="col-md-6">
            <h4>Team</h4>
            <p>Brenda Bekins, Maxwell Abrams, Keaton Berger, James Nedeltchev</p>
            <h4>Tools</h4>
            <p>Tableau, Excel, Powerpoint</p>
            <p>&nbsp;</p>
            </div>

            {/*timeline*/}

            <h2 align="center">. . .</h2>
            <h1 className="uppercase" align="center">Timeline</h1>
            <img src="/images/greener_dining/timeline.jpeg" className="img-responsive" alt="" />

            {/*timeline*/}

            <div align="center">
            <h2>. . .</h2>
            <h1 className="uppercase">Venture Description</h1>
            <img src="/images/greener_dining/project_logo.png" className="img-responsive" width="300" alt="" />
            <img src="/images/greener_dining/arrow.png" className="img-responsive" width="100" alt="" />
            <img src="/images/greener_dining/mission.png" className="img-responsive" width="500" alt="" />
            <img src="/images/greener_dining/arrow.png" className="img-responsive" width="100" alt="" />
            <div className="col-md-6">
            <p>&nbsp;</p>
            <img src="/images/greener_dining/product.png" className="img-responsive" width="600" alt="" />
            </div>
            <div className="col-md-6">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>The integrated scheduling app will allow managers to use our outlet technology to automatically turn off machines during times that are scheduled as “downtime”. This eliminates the need to manually turn on and off machines while optimizing the energy usage in the dining halls. Our app will not only be efficient for the environment and the university, but also the workers who interact with these machines on a daily basis.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            </div>
            <img src="/images/greener_dining/arrow.png" className="img-responsive" width="100" alt="" />
            <img src="/images/greener_dining/journey.png" className="img-responsive" width="800" alt="" />
            <img src="/images/greener_dining/arrow.png" className="img-responsive" width="100" alt="" />
            <div className="col-md-6">
            <img src="/images/greener_dining/dashboard.png" className="img-responsive" alt="" />
            </div>
            <div className="col-md-6">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <img src="/images/greener_dining/altosham.png" className="img-responsive" alt="" />
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            </div>
            <img src="/images/greener_dining/notification.png" className="img-responsive" alt="" />
            </div>



            {/*methodology*/}

            <div align="center">

            <div>
            <h2>. . .</h2>
            <h1 className="uppercase">Methodology</h1>

            {/*cost benefit analysis*/}
            <h3 className="mainYellow">Expert Calls</h3>
            <p className="italics">Conversed with chefs at South Quad and East Quad dining halls to better understand bottlenecks and potential points of improvement in the preparation/ cooking process to reduce carbon emissions</p>
            <p>&nbsp;</p>
            </div>

            <h3 className="mainYellow">Operations Analysis</h3>
            <p className="italics">Conducted capacity and efficiency analysis to determine the ideal number of AltoShams, steamers, and dishwashers in all Michigan dining halls</p>
            <p>&nbsp;</p>

            <h3 className="mainYellow">Competitive Analysis</h3>
            <p className="italics">Evaluated general landscape of existing carbon reduction efforts and methods to better inform our solution</p>
            <p>&nbsp;</p>

            <h3 className="mainYellow">Pricing & Cost Analysis</h3>
            <p className="italics">Considered energy usage per appliance, number of machines, hours of machine use, average cost per kw, full cost of machine, and an energy savings factor to calculate total financial and energy cost savings from reduced annual carbon emissions as a result of our solution</p>
            </div>

            <div align="center">
            <h2>. . .</h2>
            <h1 className="uppercase">Meet & Greet</h1>
            <p>The winning team of 2019 RIS Competition got to meet the University of Michigan President Schlissel and the Ross School of Business Dean Scott Derue.</p>
            <div className="col-md-6">
            <img src="/images/greener_dining/meeting1.jpeg" className="img-responsive" alt="" />
            </div>
            <div className="col-md-6">
            <img src="/images/greener_dining/meeting2.jpeg" className="img-responsive" alt="" />
            </div>
            </div>

            </div>
            </div>



    );
  }
}
